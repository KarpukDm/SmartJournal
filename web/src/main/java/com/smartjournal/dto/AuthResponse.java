package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

/**
 * Created by karpukdm on 10/24/16.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AuthResponse implements Serializable {

    private String id;

    private String name;

    private String email;

    public AuthResponse(String id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public AuthResponse(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public AuthResponse() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
