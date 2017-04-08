package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class StudentDTO {

    private Long id;

    private String name;

    private List<StatisticsDTO> statistics;
}
