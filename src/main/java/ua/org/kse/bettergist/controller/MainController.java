package ua.org.kse.bettergist.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @PostMapping
    public Long createGist() {
        // TODO

        return 0L;
    }
}
