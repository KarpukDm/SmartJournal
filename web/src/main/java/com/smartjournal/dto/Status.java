package com.smartjournal.dto;

import java.io.Serializable;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public class Status implements Serializable {

    private String id;

    private String value;

    private String description;

    public Status(String value, String description) {
        this.value = value;
        this.description = description;
    }

    public Status() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
