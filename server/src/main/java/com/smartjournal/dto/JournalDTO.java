package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.smartjournal.model.Journal;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class JournalDTO implements Serializable {

    private Long id;

    private String journalName;

    private Journal.Layer layer;

}
