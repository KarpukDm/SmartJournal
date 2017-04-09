package com.smartjournal.service;

import com.smartjournal.model.Journal;
import com.smartjournal.repository.JournalRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JournalService {

    private final JournalRepository repository;

    public JournalService(JournalRepository repository) {
        this.repository = repository;
    }

    public Journal findOne(final Long id) {
        return repository.findOne(id);
    }

    public Journal save(final Journal journal) {
        return repository.save(journal);
    }

    public List<Journal> getJournalsById(Long id) {

        return repository.findAll()
                .stream()
                .filter(x -> !x.getAccounts()
                        .stream()
                        .filter(y -> id.equals(y.getId()))
                        .collect(Collectors.toList())
                        .isEmpty())
                .collect(Collectors.toList());
    }
}
