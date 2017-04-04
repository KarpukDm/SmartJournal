package com.smartjournal.service.impl;

import com.smartjournal.model.Schedule;
import com.smartjournal.repository.ScheduleRepository;
import com.smartjournal.service.common.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class ScheduleServiceImpl extends AbstractServiceImpl<Schedule, Long, ScheduleRepository> {

    public ScheduleServiceImpl(final ScheduleRepository repository) {
        super(repository);
    }
}
