package com.smartjournal.controller;

import com.smartjournal.dto.AcademicPlanDTO;
import com.smartjournal.model.AcademicPlan;
import com.smartjournal.service.AcademicPlanService;
import org.dozer.DozerBeanMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/academicPlan")
public class AcademicPlanController {

    private final DozerBeanMapper mapper;

    private final AcademicPlanService academicPlanService;

    public AcademicPlanController(final DozerBeanMapper mapper,
                                  final AcademicPlanService academicPlanService) {
        this.mapper = mapper;
        this.academicPlanService = academicPlanService;
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity saveAcademicPlan(@RequestBody AcademicPlanDTO academicPlanDTO) {

        AcademicPlan academicPlan = mapper.map(academicPlanDTO, AcademicPlan.class);

        academicPlan = academicPlanService.save(academicPlan);

        return ResponseEntity.ok(academicPlan);
    }
}
