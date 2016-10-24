package com.smartjournal.dto;

import java.io.Serializable;

/**
 * Created by karpukdm on 10/24/16.
 */
public class AuthResponse implements Serializable {

    private String name;

    private String email;

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
}
