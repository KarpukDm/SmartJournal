package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LessonDTO {

    private Long id;

    private String date;

    private String theme;

    private String description;

    private String lessonType;

    private boolean isComplete;
}
