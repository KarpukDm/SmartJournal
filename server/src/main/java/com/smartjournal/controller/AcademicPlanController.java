package com.smartjournal.controller;

import com.smartjournal.dto.AcademicPlanDTO;
import com.smartjournal.model.AcademicPlan;
import com.smartjournal.service.AcademicPlanService;
import org.dozer.DozerBeanMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "/getByDisciplineId")
    public ResponseEntity getAcademicPlanByDisciplineId(final @RequestParam(name = "id") Long id) {

        return ResponseEntity.ok(academicPlanService.findAllByDiscipline(id));
    }

    @RequestMapping(value = "/getByDisciplineIdAndLayerId")
    public ResponseEntity getAcademicPlanByDisciplineIdAndLayerId(final @RequestParam(name = "disciplineId") Long disciplineId,
                                                                  final @RequestParam(name = "layerId") Long layerId) {

        return ResponseEntity.ok(academicPlanService.findAllByDisciplineAndLayer(disciplineId, layerId));
    }
}
