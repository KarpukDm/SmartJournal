package com.smartjournal.controller;

import com.smartjournal.dto.AcademicPlanDTO;
import com.smartjournal.dto.JournalDTO;
import com.smartjournal.dto.StatisticsDTO;
import com.smartjournal.dto.StudentDTO;
import com.smartjournal.model.*;
import com.smartjournal.service.AcademicPlanService;
import com.smartjournal.service.JournalService;
import com.smartjournal.service.StatisticsService;
import com.smartjournal.util.SecurityUtils;
import org.apache.commons.io.IOUtils;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/journal")
public class JournalController {

    private final JournalService journalService;

    private final AcademicPlanService academicPlanService;

    private final StatisticsService statisticsService;

    private final DozerBeanMapper mapper;

    @Autowired
    public JournalController(final JournalService journalService,
                             final AcademicPlanService academicPlanService,
                             final StatisticsService statisticsService,
                             final DozerBeanMapper mapper) {
        this.journalService = journalService;
        this.academicPlanService = academicPlanService;
        this.statisticsService = statisticsService;
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

    @RequestMapping(path = {"/update"}, method = RequestMethod.POST)
    public ResponseEntity updateJournal(final @RequestBody(required = false) JournalDTO journalDTO) {

        Journal journal = mapper.map(journalDTO, Journal.class);

        List<Account> accounts = new ArrayList<>();

        for(Account account : journal.getAccounts()) {
            if(!accounts.contains(account)) {
                accounts.add(account);
            }
        }

        journal.setAccounts(accounts);

        journal = journalService.save(journal);

        return ResponseEntity.ok(journal);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity saveJournal(final @RequestBody AcademicPlanDTO academicPlanDTO) {
        AcademicPlan academicPlan = mapper.map(academicPlanDTO, AcademicPlan.class);

        academicPlan = academicPlanService.save(academicPlan);

        return ResponseEntity.ok(academicPlan);
    }

    @RequestMapping(value = "/updateCell", method = RequestMethod.POST)
    public ResponseEntity saveJournal(final @RequestBody StatisticsDTO statisticsDTO) {
        Statistics statistics = mapper.map(statisticsDTO, Statistics.class);

        statistics = statisticsService.save(statistics);

        return ResponseEntity.ok(statistics);
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

    @RequestMapping(path = {"/upload"}, method = RequestMethod.POST)
    public ResponseEntity updateJournal(@RequestParam(value = "uploadfiles", required = false) MultipartFile file) throws IOException {

        ByteArrayInputStream stream = new ByteArrayInputStream(file.getBytes());
        String myString = IOUtils.toString(stream, "UTF-8");

        if (myString != null) {
            List<StudentDTO> students = Arrays.stream(myString.split("\n"))
                    .map(StudentDTO::new)
                    .collect(Collectors.toList());

            return ResponseEntity.ok(students);
        }
        return ResponseEntity.ok().build();
    }
}