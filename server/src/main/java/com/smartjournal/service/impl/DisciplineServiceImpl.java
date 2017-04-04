package com.smartjournal.service.impl;

import com.smartjournal.model.Discipline;
import com.smartjournal.repository.DisciplineRepository;
import com.smartjournal.service.common.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class DisciplineServiceImpl extends AbstractServiceImpl<Discipline, Long, DisciplineRepository> {

    public DisciplineServiceImpl(final DisciplineRepository repository) {
        super(repository);
    }
}
