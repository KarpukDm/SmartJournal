package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class StatisticsDTO implements Serializable {

    private DisciplineDTO discipline;

    private Status status;

    private String date;

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private static class Status implements Serializable {

        private Boolean isThere;

        private Integer mark;
    }
}
