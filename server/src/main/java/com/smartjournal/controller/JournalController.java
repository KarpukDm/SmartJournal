package com.smartjournal.controller;

import com.smartjournal.dto.JournalDTO;
import com.smartjournal.dto.LayerDTO;
import com.smartjournal.model.Account;
import com.smartjournal.model.Journal;
import com.smartjournal.model.Layer;
import com.smartjournal.service.JournalService;
import com.smartjournal.service.LayerService;
import com.smartjournal.util.SecurityUtils;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("api/journal")
public class JournalController {

    private final JournalService journalService;

    private final LayerService layerService;

    private final DozerBeanMapper mapper;

    @Autowired
    public JournalController(final JournalService journalService,
                             final LayerService layerService,
                             final DozerBeanMapper mapper) {
        this.journalService = journalService;
        this.layerService = layerService;
        this.mapper = mapper;
    }

    @RequestMapping(path = {"/create"}, method = RequestMethod.POST)
    public ResponseEntity createTemplate(final @RequestBody(required = false) JournalDTO journalDTO) {

        Journal journal = mapper.map(journalDTO, Journal.class);
        Account account = SecurityUtils.getCurrentUser();
        if (account != null) {
            if (journal.getAccounts() == null) {
                journal.setAccounts(Collections.singletonList(account));
            } else {
                int counter = (int) journal.getAccounts().stream()
                        .filter(x -> Objects.equals(x.getId(), account.getId()))
                        .count();

                if (counter == 0) {
                    journal.getAccounts().add(account);
                }
            }
        }

        journal = journalService.save(journal);

        return ResponseEntity.ok(journal);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity saveJournal(final @RequestBody LayerDTO layerDTO) {
        Layer layer = mapper.map(layerDTO, Layer.class);

        layer = layerService.save(layer);

        return ResponseEntity.ok(layer);
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
