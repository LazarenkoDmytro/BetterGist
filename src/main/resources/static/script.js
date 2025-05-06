document.getElementById('saveButton').addEventListener('click', async () => {
    const title = document.getElementById('title').value;
    const code = document.getElementById('code').value;

    try {
        const response = await fetch('http://localhost:5500/code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, code })
        });

        if (!response.ok) {
            throw new Error('Failed to save');
        }

        const result = await response.json();
        const id = result.id;

        window.location.href = `http://localhost:5500/view.html?id=${id}`;
    } catch (err) {
        alert('Error saving code: ' + err.message);
    }
});
