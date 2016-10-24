package com.smartjournal.controller;

import com.smartjournal.entity.JournalTemplateModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@RestController
//@RequestMapping(value = "/template")
public class JournalTemplateController {

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity createTemplate(@RequestBody JournalTemplateModel journalTemplateModel){

        return new ResponseEntity(journalTemplateModel, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getTemplate(
            @RequestParam(name = "type", required = false) String type){

        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/me", method = RequestMethod.GET)
    public ResponseEntity getMyTemplates(){

        return new ResponseEntity(HttpStatus.OK);
    }
}
