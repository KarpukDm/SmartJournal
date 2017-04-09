package com.smartjournal.controller;

import com.smartjournal.dto.JournalDTO;
import com.smartjournal.model.Account;
import com.smartjournal.model.Journal;
import com.smartjournal.service.JournalService;
import com.smartjournal.util.SecurityUtils;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("api/journal")
public class JournalController {

    private final JournalService journalService;

    private final DozerBeanMapper mapper;

    @Autowired
    public JournalController(final JournalService journalService,
                             final DozerBeanMapper mapper) {
        this.journalService = journalService;
        this.mapper = mapper;
    }

    @RequestMapping(path = {"/create", "/save"}, method = RequestMethod.POST)
    public ResponseEntity createTemplate(final @RequestBody(required = false) JournalDTO journalDTO) {

        Journal journal = mapper.map(journalDTO, Journal.class);
        Account account = SecurityUtils.getCurrentUser();
        if (account != null) {
            journal.setAccounts(new ArrayList<>(Collections.singletonList(account)));
        }

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

        Account account = SecurityUtils.getCurrentUser();
        if (account != null) {
            List<Journal> journals = journalService.getJournalsById(account.getId());
            return ResponseEntity.ok(journals);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }
}
