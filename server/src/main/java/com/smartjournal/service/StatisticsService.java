package com.smartjournal.service;

import com.smartjournal.model.Statistics;
import com.smartjournal.repository.StatisticsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatisticsService {

    private final StatisticsRepository repository;

    public StatisticsService(StatisticsRepository repository) {
        this.repository = repository;
    }

    public List<Statistics> getStatisticsById(Long id) {

        return null;
    }
}
