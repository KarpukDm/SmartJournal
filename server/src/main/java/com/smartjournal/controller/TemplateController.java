package com.smartjournal.controller;

import com.smartjournal.dto.TemplateDTO;
import com.smartjournal.model.Template;
import com.smartjournal.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/template")
public class TemplateController {

    private final TemplateRepository templateRepository;

    @Autowired
    public TemplateController(TemplateRepository templateRepository) {
        this.templateRepository = templateRepository;
    }

    @RequestMapping(path = {"/create", "/save"}, method = RequestMethod.POST)
    public ResponseEntity createTemplate(@RequestBody TemplateDTO templateDTO) {

        Template template = new Template();
        template.setId(templateDTO.getId());
        template.setTemplateName(templateDTO.getTemplateName());
        template.setLayer(templateDTO.getLayer());

        template = templateRepository.save(template);

        return new ResponseEntity(template, HttpStatus.OK);
    }

    @RequestMapping
    public ResponseEntity findTemplateById(@RequestParam(name = "id", required = false) Long id){

        Template template = templateRepository.findOne(id);
        return new ResponseEntity(template, HttpStatus.OK);
    }
}
