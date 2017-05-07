package com.smartjournal.service;

import com.smartjournal.model.AcademicPlan;
import com.smartjournal.repository.AcademicPlanRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

@Service
public class AcademicPlanService {

    private final AcademicPlanRepository repository;

    public AcademicPlanService(final AcademicPlanRepository repository) {
        this.repository = repository;
    }

    public AcademicPlan save(final AcademicPlan academicPlan) {
        return repository.save(academicPlan);
    }

    public List<AcademicPlan> findAllByDiscipline(final Long id) {
        return repository.findAll().stream()
                .filter(x -> x.getDiscipline().getId().equals(id))
                .collect(toList());
    }

    public AcademicPlan findAllByDisciplineAndLayer(final Long disciplineId, final Long layerId) {
        return repository.findAll().stream()
                .filter(x -> x.getDiscipline().getId().equals(disciplineId)
                        && x.getLayer().getId().equals(layerId))
                .collect(toList()).get(0);
    }
}
