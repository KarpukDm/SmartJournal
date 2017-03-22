package com.smartjournal.controller;

import com.smartjournal.service.impl.JournalServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class ProfileController {

    private final JournalServiceImpl templateService;

    @Autowired
    public ProfileController(JournalServiceImpl templateService) {

        this.templateService = templateService;
    }

}
