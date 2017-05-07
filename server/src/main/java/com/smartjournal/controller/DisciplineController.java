package com.smartjournal.controller;

import com.smartjournal.dto.DisciplineDTO;
import com.smartjournal.model.Account;
import com.smartjournal.model.Discipline;
import com.smartjournal.service.AccountService;
import com.smartjournal.service.DisciplineService;
import com.smartjournal.util.SecurityUtils;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/discipline")
public class DisciplineController {

    private final DisciplineService disciplineService;

    private final AccountService accountService;

    private final DozerBeanMapper mapper;

    @Autowired
    public DisciplineController(final DisciplineService disciplineService,
                                final AccountService accountService,
                                final DozerBeanMapper mapper) {
        this.disciplineService = disciplineService;
        this.accountService = accountService;
        this.mapper = mapper;
    }

    @RequestMapping(value = "/my", method = RequestMethod.GET)
    public ResponseEntity getMyDisciplines() {

        final Account account = SecurityUtils.getCurrentUser();
        if (account != null) {
            return ResponseEntity.ok(account.getDisciplines());
        }

        return ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity saveDisciplines(final @RequestBody DisciplineDTO disciplineDTO) {

        Discipline discipline = mapper.map(disciplineDTO, Discipline.class);

        discipline = disciplineService.save(discipline);

        final Account account = SecurityUtils.getCurrentUser();
        if (account != null) {
            account.addDiscipline(discipline);
        }

        accountService.save(account);

        return ResponseEntity.ok(discipline);
    }
}
