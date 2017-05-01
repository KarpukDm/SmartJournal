package com.smartjournal.service;

import com.smartjournal.model.Layer;
import com.smartjournal.repository.LayerRepository;
import org.springframework.stereotype.Service;

@Service
public class LayerService {

    private final LayerRepository repository;

    public LayerService(final LayerRepository repository) {
        this.repository = repository;
    }

    public Layer save(Layer layer) {
        return repository.save(layer);
    }
}
