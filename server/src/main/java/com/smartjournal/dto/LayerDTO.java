package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.smartjournal.model.GroupInfo;
import com.smartjournal.model.Student;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LayerDTO {

    private Long id;

    private String layerName;

    private String layerType;

    private List<LayerDTO> layers;

    private List<StudentDTO> students;

    private List<GroupInfoDTO> groupInfo;
}
