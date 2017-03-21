package com.smartjournal.controller;

import com.smartjournal.dto.TemplateDTO;
import com.smartjournal.model.Journal;
import com.smartjournal.service.impl.TemplateServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/template")
public class TemplateController {

    private final TemplateServiceImpl templateService;

    @Autowired
    public TemplateController(TemplateServiceImpl templateService) {
        this.templateService = templateService;
    }

    @RequestMapping(path = {"/create", "/save"}, method = RequestMethod.POST)
    public ResponseEntity createTemplate(@RequestBody(required = false) TemplateDTO templateDTO) {

        Journal journal = new Journal();
        journal.setId(templateDTO.getId());
        journal.setTemplateName(templateDTO.getTemplateName());
        journal.setLayer(templateDTO.getLayer());

        journal = templateService.save(journal);

        return new ResponseEntity(journal, HttpStatus.OK);
    }

    @RequestMapping
    public ResponseEntity findTemplateById(@RequestParam(name = "id", required = false) Long id){

        Journal journal = templateService.findOne(id);
        return new ResponseEntity(journal, HttpStatus.OK);
    }
}
