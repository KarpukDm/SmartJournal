package com.smartjournal.repository;

import com.smartjournal.model.AcademicPlan;
import com.smartjournal.model.Discipline;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AcademicPlanRepository extends JpaRepository<AcademicPlan, Long> {
}
