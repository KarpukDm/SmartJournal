package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AccountDTO {

    private Long id;

    private String login;

    private String password;

    private List<AcademicPlanDTO> academicPlans;
}
