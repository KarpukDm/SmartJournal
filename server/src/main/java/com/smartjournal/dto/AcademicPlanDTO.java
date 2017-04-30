package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AcademicPlanDTO {

    private Long id;

    private DisciplineDTO discipline;

    private LayerDTO layer;

    private List<LessonDTO> lessons;

}
