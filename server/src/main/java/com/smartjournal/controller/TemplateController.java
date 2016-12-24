package com.smartjournal.controller;

import com.smartjournal.dto.TemplateDTO;
import com.smartjournal.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

@RestController
@RequestMapping(path = "/template")
public class TemplateController {

    private final TemplateRepository templateRepository;

    @Autowired
    public TemplateController(TemplateRepository templateRepository) {
        this.templateRepository = templateRepository;
    }

    @RequestMapping(path = "/create", method = RequestMethod.POST)
    public DeferredResult createTemplate(@RequestBody TemplateDTO templateDTO) {

        DeferredResult deferredResult = new DeferredResult();
        deferredResult.setResult(new ResponseEntity(templateDTO, HttpStatus.OK));
        return deferredResult;
    }
}
