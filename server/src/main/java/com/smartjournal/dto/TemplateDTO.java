package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TemplateDTO implements Serializable {

    private String templateName;

    private LayerDTO layer;

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private static class LayerDTO implements Serializable {

        private Long id;

        private String layerName;

        private String layerType;

        private List<LayerDTO> layers;

        private List<StudentDTO> students;
    }
}
