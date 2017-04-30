package com.smartjournal.service;

import com.smartjournal.model.AcademicPlan;
import com.smartjournal.repository.AcademicPlanRepository;
import org.springframework.stereotype.Service;

@Service
public class AcademicPlanService {

    private final AcademicPlanRepository repository;

    public AcademicPlanService(AcademicPlanRepository repository) {
        this.repository = repository;
    }

    public AcademicPlan save(AcademicPlan academicPlan){
        return repository.save(academicPlan);
    }
}
