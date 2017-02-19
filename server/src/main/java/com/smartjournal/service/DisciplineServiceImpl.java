package com.smartjournal.service;

import com.smartjournal.repository.DisciplineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DisciplineServiceImpl {

    private final DisciplineRepository disciplineRepository;

    @Autowired
    public DisciplineServiceImpl(DisciplineRepository disciplineRepository) {
        this.disciplineRepository = disciplineRepository;
    }
}
