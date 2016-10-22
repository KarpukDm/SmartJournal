package com.smartjournal.dto;

import java.io.Serializable;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public class AtomModel implements Serializable{

    private String id;

    private String name;

    public AtomModel(String name) {
        this.name = name;
    }

    public AtomModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
