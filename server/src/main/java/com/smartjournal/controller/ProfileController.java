package com.smartjournal.controller;

import com.smartjournal.model.Template;
import com.smartjournal.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProfileController {

    private final TemplateRepository templateRepository;

    @Autowired
    public ProfileController(TemplateRepository templateRepository) {
        this.templateRepository = templateRepository;
    }

    @RequestMapping(path = "/getMyTemplates")
    public ResponseEntity getMyTemplates(){

        List<Template> templates = templateRepository.findAll();
        return new ResponseEntity(templates, HttpStatus.OK);
    }
}
