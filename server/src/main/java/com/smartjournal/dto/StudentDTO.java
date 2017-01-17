package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class StudentDTO implements Serializable {

    private Long id;

    private String name;

    private List<StatisticsDTO> statistics;
}
