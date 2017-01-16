package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class StatisticsDTO implements Serializable{

    private DisciplineDTO discipline;

    private StudentDTO student;

    private ObserverDTO observer;

    private String date;
}
