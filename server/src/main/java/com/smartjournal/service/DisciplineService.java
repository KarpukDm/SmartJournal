package com.smartjournal.service;

import com.smartjournal.repository.DisciplineRepository;
import org.springframework.stereotype.Service;

@Service
public class DisciplineService {

    private final DisciplineRepository repository;

    public DisciplineService(DisciplineRepository repository) {
        this.repository = repository;
    }
}
