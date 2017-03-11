package com.smartjournal.controller;

import com.smartjournal.model.Template;
import com.smartjournal.service.impl.TemplateServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public class ProfileController {

    private final TemplateServiceImpl templateService;

    @Autowired
    public ProfileController(TemplateServiceImpl templateService) {

        this.templateService = templateService;
    }

    @RequestMapping(path = "/myTemplates")
    public ResponseEntity getMyTemplates(){

        List<Template> templates = templateService.findAll();
        return new ResponseEntity(templates, HttpStatus.OK);
    }
}
