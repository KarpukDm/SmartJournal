package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.smartjournal.model.Statistics;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LessonDTO {

    private Long id;

    private String date;

    private String theme;

    private String description;

    private String lessonType;

    private boolean completeFlag;

    private List<Statistics> statistics;
}
