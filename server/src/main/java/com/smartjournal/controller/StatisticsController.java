package com.smartjournal.controller;

import com.smartjournal.model.Statistics;
import com.smartjournal.service.StatisticsService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/statistics")
public class StatisticsController {

    private final StatisticsService statisticsService;

    public StatisticsController(final StatisticsService statisticsService) {
        this.statisticsService = statisticsService;
    }

    @RequestMapping(value = "/{id}")
    public List<Statistics> getStatistics(@PathVariable final Long id) {

        return null;
    }
}
