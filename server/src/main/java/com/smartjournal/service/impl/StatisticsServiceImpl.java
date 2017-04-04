package com.smartjournal.service.impl;

import com.smartjournal.model.Statistics;
import com.smartjournal.repository.StatisticsRepository;
import com.smartjournal.service.common.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class StatisticsServiceImpl extends AbstractServiceImpl<Statistics, Long, StatisticsRepository> {

    public StatisticsServiceImpl(final StatisticsRepository repository) {
        super(repository);
    }
}
