package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.smartjournal.model.Student;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LayerDTO implements Serializable {

    private String layerName;

    private String layerType;

    private List<LayerDTO> layers;

    private List<Student> students;
}
