package com.smartjournal.controller;

import com.smartjournal.dto.JournalDTO;
import com.smartjournal.model.Journal;
import com.smartjournal.service.impl.JournalServiceImpl;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/journal")
public class JournalController {

    private final JournalServiceImpl journalService;

    private final DozerBeanMapper mapper;

    @Autowired
    public JournalController(final JournalServiceImpl journalService,
                             final DozerBeanMapper mapper) {
        this.journalService = journalService;
        this.mapper = mapper;
    }

    @RequestMapping(path = {"/create", "/save"}, method = RequestMethod.POST)
    public ResponseEntity createTemplate(final @RequestBody(required = false) JournalDTO journalDTO) {

        Journal journal = mapper.map(journalDTO, Journal.class);

        journal = journalService.save(journal);

        return ResponseEntity.ok(journal);
    }

    @RequestMapping
    public ResponseEntity findTemplateById(final @RequestParam(name = "id") Long id) {

        Journal journal = journalService.findOne(id);
        return ResponseEntity.ok(journal);
    }

    @RequestMapping(path = "/my")
    public ResponseEntity getMyJournals() {

        List<Journal> journals = journalService.findAll();
        return ResponseEntity.ok(journals);
    }
}
