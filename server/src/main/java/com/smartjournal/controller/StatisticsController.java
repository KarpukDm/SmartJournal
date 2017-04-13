package com.smartjournal.controller;

import com.smartjournal.dto.statistics.AverageScore;
import com.smartjournal.model.Statistics;
import com.smartjournal.service.StatisticsService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping(value = "/api/statistics")
public class StatisticsController {

    private final StatisticsService statisticsService;

    public StatisticsController(final StatisticsService statisticsService) {
        this.statisticsService = statisticsService;
    }

    @RequestMapping(value = "/averageScore")
    public List<AverageScore> getAverageScore() {

        List<AverageScore> averageScores = new ArrayList<>();

        for(int i = 0; i < 20; i++){
            averageScores.add(new AverageScore("05.08." + String.valueOf(2000 + i), (double) new Random().nextInt(10)));
        }

        return averageScores;
    }
}
