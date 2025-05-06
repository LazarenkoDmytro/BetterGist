window.addEventListener('DOMContentLoaded', async () => {
    const pathParts = window.location.pathname.split('/');
    const id = pathParts[pathParts.length - 1];

    try {
        const response = await fetch(`http://localhost:5500/code/${id}`);

        if (!response.ok) {
            throw new Error('Code block not found');
        }

        const { title, code } = await response.json();

        document.getElementById('viewTitle').textContent = title;
        document.getElementById('viewCode').textContent = code;
    } catch (error) {
        document.getElementById('viewTitle').textContent = 'Error loading code';
        document.getElementById('viewCode').textContent = error.message;
    }
});
