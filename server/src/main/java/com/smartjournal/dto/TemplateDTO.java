package com.smartjournal.dto;

import com.smartjournal.model.Template;
import lombok.Data;

import java.io.Serializable;

@Data
public class TemplateDTO implements Serializable {

    private Template.Layer layer;
}
