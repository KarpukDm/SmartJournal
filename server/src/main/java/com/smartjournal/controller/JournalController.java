package com.smartjournal.controller;

import com.smartjournal.dto.JournalDTO;
import com.smartjournal.model.Journal;
import com.smartjournal.service.impl.JournalServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RestController
@RequestMapping("api/journal")
public class JournalController {

    private final JournalServiceImpl journalService;

    @Autowired
    public JournalController(final JournalServiceImpl journalService) {
        this.journalService = journalService;
    }

    @RequestMapping(path = {"/create", "/save"}, method = RequestMethod.POST)
    public ResponseEntity createTemplate(final @RequestBody(required = false) JournalDTO journalDTO) {

        Journal journal = new Journal();
        journal.setId(journalDTO.getId());
        journal.setJournalName(journalDTO.getJournalName());
        journal.setLayer(journalDTO.getLayer());

        journal = journalService.save(journal);

        return new ResponseEntity(journal, HttpStatus.OK);
    }

    @RequestMapping
    public ResponseEntity findTemplateById(final @RequestParam(name = "id") Long id) {

        Journal journal = journalService.findOne(id);
        return new ResponseEntity(journal, HttpStatus.OK);
    }

    @RequestMapping(path = "/my")
    public ResponseEntity getMyJournals() {

        List<Journal> journals = journalService.findAll();
        return new ResponseEntity(journals, HttpStatus.OK);
    }
}
