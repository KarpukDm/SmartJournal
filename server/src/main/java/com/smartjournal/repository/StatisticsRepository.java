package com.smartjournal.repository;

import com.smartjournal.model.Statistics;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatisticsRepository extends JpaRepository<Statistics,Long> {
}
