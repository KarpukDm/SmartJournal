package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.smartjournal.model.Account;
import com.smartjournal.model.Lesson;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DisciplineDTO {

    private String id;

    private String name;

    private List<DisciplineTypeDTO> disciplineTypes;

}
