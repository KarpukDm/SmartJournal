package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class StatisticsDTO {

    private Long id;

    private DisciplineDTO discipline;

    private StatusDTO status;

    private String date;

    private Long journalId;

}
