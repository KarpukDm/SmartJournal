package com.smartjournal.service;

import com.smartjournal.model.Discipline;
import com.smartjournal.repository.DisciplineRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DisciplineService {

    private final DisciplineRepository repository;

    public DisciplineService(DisciplineRepository repository) {
        this.repository = repository;
    }

    public Discipline save(Discipline discipline) {
        return repository.save(discipline);
    }

    public List<Discipline> getMyDisciplines() {
        return repository.findAll();
    }
}
