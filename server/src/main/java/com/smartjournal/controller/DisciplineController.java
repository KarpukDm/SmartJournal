package com.smartjournal.controller;

import com.smartjournal.dto.DisciplineDTO;
import com.smartjournal.model.Account;
import com.smartjournal.model.Discipline;
import com.smartjournal.service.DisciplineService;
import com.smartjournal.util.SecurityUtils;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("api/discipline")
public class DisciplineController {

    private final DisciplineService disciplineService;

    private final DozerBeanMapper mapper;

    @Autowired
    public DisciplineController(final DisciplineService disciplineService,
                                final DozerBeanMapper mapper) {
        this.disciplineService = disciplineService;
        this.mapper = mapper;
    }

    @RequestMapping(value = "/my", method = RequestMethod.GET)
    public ResponseEntity getMyDisciplines() {

        List<Discipline> disciplines = disciplineService.getMyDisciplines();

        return ResponseEntity.ok(disciplines);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity saveDisciplines(final @RequestBody DisciplineDTO disciplineDTO) {

        Discipline discipline = mapper.map(disciplineDTO, Discipline.class);

        Account account = SecurityUtils.getCurrentUser();
        if (account != null) {
            discipline.setAccount(account);
        }

        discipline = disciplineService.save(discipline);

        return ResponseEntity.ok(discipline);
    }
}
