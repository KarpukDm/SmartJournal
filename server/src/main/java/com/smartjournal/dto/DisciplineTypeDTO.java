package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DisciplineTypeDTO {

    private String id;

    private String name;

    private Integer currentCounter;

    private Integer hoursNumber;
}
