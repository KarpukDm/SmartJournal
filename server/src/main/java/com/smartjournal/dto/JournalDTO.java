package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.smartjournal.model.Account;
import com.smartjournal.model.Layer;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class JournalDTO {

    private Long id;

    private String journalName;

    private LayerDTO layer;

    private List<AccountDTO> accounts;
}
