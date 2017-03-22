package com.smartjournal.service.impl;

import com.smartjournal.model.Journal;
import com.smartjournal.repository.JournalRepository;
import com.smartjournal.service.common.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class JournalServiceImpl extends AbstractServiceImpl<Journal, Long, JournalRepository> {


    public JournalServiceImpl(JournalRepository repository) {
        super(repository);
    }

    public Journal findOne(Long id){
        return repository.findOne(id);
    }

    public Journal save(Journal journal){
        return repository.save(journal);
    }
}
