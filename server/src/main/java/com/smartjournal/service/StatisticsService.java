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

    public Statistics save(Statistics statistics) {
        return repository.save(statistics);
    }

    public List<Statistics> getStatisticsById(Long id) {

        return null;
    }
}
