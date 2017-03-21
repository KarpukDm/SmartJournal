package com.smartjournal.service.impl;

import com.smartjournal.repository.ObserverRepository;
import com.smartjournal.service.common.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class ObserverServiceImpl extends AbstractServiceImpl<Observer, Long, ObserverRepository> {

    public ObserverServiceImpl(ObserverRepository repository) {
        super(repository);
    }
}
