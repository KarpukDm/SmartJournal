package com.smartjournal.controller;

import com.smartjournal.service.JournalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class ProfileController {

    private final JournalService templateService;

    @Autowired
    public ProfileController(final JournalService templateService) {

        this.templateService = templateService;
    }

}
