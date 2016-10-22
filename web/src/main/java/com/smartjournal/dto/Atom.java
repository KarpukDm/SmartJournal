package com.smartjournal.dto;

import java.io.Serializable;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public class Atom implements Serializable{

    private String id;

    private String name;

    public Atom(String name) {
        this.name = name;
    }

    public Atom() {
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
