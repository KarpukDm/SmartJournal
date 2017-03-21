package com.smartjournal.service.impl;

import com.smartjournal.model.Journal;
import com.smartjournal.repository.TemplateRepository;
import com.smartjournal.service.common.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class TemplateServiceImpl extends AbstractServiceImpl<Journal, Long, TemplateRepository> {


    public TemplateServiceImpl(TemplateRepository repository) {
        super(repository);
    }

    public Journal findOne(Long id){
        return repository.findOne(id);
    }

    public Journal save(Journal journal){
        return repository.save(journal);
    }
}
