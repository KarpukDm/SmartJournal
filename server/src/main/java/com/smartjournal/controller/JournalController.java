package com.smartjournal.controller;

import com.smartjournal.dto.AcademicPlanDTO;
import com.smartjournal.dto.JournalDTO;
import com.smartjournal.dto.LayerDTO;
import com.smartjournal.model.AcademicPlan;
import com.smartjournal.model.Account;
import com.smartjournal.model.Journal;
import com.smartjournal.model.Layer;
import com.smartjournal.service.AcademicPlanService;
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

    private final AcademicPlanService academicPlanService;

    private final DozerBeanMapper mapper;

    @Autowired
    public JournalController(final JournalService journalService,
                             final AcademicPlanService academicPlanService,
                             final DozerBeanMapper mapper) {
        this.journalService = journalService;
        this.academicPlanService = academicPlanService;
        this.mapper = mapper;
    }

    @RequestMapping(path = {"/create"}, method = RequestMethod.POST)
    public ResponseEntity createTemplate(final @RequestBody(required = false) JournalDTO journalDTO) {

        Journal journal2 = mapper.map(journalDTO, Journal.class);

        Journal journal = new Journal();
        if (journal2.getId() != null) {
            journal = journalService.findOne(journal2.getId());
        }

        if (journal == null) {
            journal = new Journal();
        }

        journal.setJournalName(journal2.getJournalName());
        journal.setAccounts(journal2.getAccounts());
        journal.setLayer(journal2.getLayer());

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
    public ResponseEntity saveJournal(final @RequestBody AcademicPlanDTO academicPlanDTO) {
        AcademicPlan academicPlan = mapper.map(academicPlanDTO, AcademicPlan.class);

        academicPlan = academicPlanService.save(academicPlan);

        return ResponseEntity.ok(academicPlan);
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
