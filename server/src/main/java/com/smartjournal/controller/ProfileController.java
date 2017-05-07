package com.smartjournal.controller;

import com.smartjournal.service.JournalService;
import com.smartjournal.util.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/profile")
public class ProfileController {

    private final JournalService templateService;

    @Autowired
    public ProfileController(final JournalService templateService) {

        this.templateService = templateService;
    }

    @RequestMapping(value = "/getAccount", method = RequestMethod.GET)
    public ResponseEntity getAccount() {

        return ResponseEntity.ok(SecurityUtils.getCurrentUserLogin());
    }

}
