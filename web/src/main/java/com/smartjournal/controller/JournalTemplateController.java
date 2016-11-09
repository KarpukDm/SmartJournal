package com.smartjournal.controller;

import com.smartjournal.datamodel.entity.JournalTemplateModel;
import com.smartjournal.service.JournalTemplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@RestController
@RequestMapping(value = "/template")
public class JournalTemplateController {

    @Autowired
    private JournalTemplateService journalTemplateService;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity createTemplate(@RequestBody JournalTemplateModel journalTemplateModel){

        journalTemplateModel.setType(journalTemplateModel.getType().toLowerCase());
        journalTemplateService.save(journalTemplateModel);
        return new ResponseEntity(journalTemplateModel, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getTemplate(
            @RequestParam(name = "type", required = false) String type){

        if(type != null && !"".equals(type)) {
            JournalTemplateModel template = journalTemplateService.findOneByType(type.toLowerCase());
            return new ResponseEntity(Collections.singletonList(template), HttpStatus.OK);
        }

        return new ResponseEntity(journalTemplateService.findAll(), HttpStatus.OK);
    }
}
