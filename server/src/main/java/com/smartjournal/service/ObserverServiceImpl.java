package com.smartjournal.service;

import com.smartjournal.repository.ObserverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ObserverServiceImpl {

    private final ObserverRepository observerRepository;

    @Autowired
    public ObserverServiceImpl(ObserverRepository observerRepository) {
        this.observerRepository = observerRepository;
    }
}
