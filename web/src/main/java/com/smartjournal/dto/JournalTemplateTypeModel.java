package com.smartjournal.dto;

import java.io.Serializable;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public class JournalTemplateTypeModel implements Serializable{

    private String id;

    private String type;

    public JournalTemplateTypeModel(String type) {
        this.type = type;
    }

    public JournalTemplateTypeModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
