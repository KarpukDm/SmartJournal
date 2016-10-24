package com.smartjournal.service.impl;

import com.smartjournal.entity.StatisticModel;
import com.smartjournal.repository.StatisticRepository;
import com.smartjournal.service.StatisticService;
import com.smartjournal.service.common.impl.GenericServiceImpl;
import org.springframework.stereotype.Service;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Service
public class StatisticServiceImpl extends GenericServiceImpl<StatisticModel, String, StatisticRepository> implements StatisticService {

    public StatisticServiceImpl(StatisticRepository repository) {
        super(repository);
    }
}
