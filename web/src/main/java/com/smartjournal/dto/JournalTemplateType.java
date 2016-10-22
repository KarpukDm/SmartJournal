package com.smartjournal.dto;

import java.io.Serializable;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public class JournalTemplateType implements Serializable{

    private String id;

    private String type;

    public JournalTemplateType(String type) {
        this.type = type;
    }

    public JournalTemplateType() {
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
