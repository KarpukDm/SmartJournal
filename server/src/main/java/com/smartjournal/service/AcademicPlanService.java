package com.smartjournal.service;

import com.smartjournal.model.AcademicPlan;
import com.smartjournal.repository.AcademicPlanRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AcademicPlanService {

    private final AcademicPlanRepository repository;

    public AcademicPlanService(AcademicPlanRepository repository) {
        this.repository = repository;
    }

    public AcademicPlan save(AcademicPlan academicPlan){
        return repository.save(academicPlan);
    }

    public List<AcademicPlan> findAllByDiscipline(Long id) {
        return repository.findAll().stream()
                .filter(x -> x.getDiscipline().getId().equals(id))
                .collect(Collectors.toList());
    }
}
