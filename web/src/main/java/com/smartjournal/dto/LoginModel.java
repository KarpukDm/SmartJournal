package com.smartjournal.dto;

import java.io.Serializable;

/**
 * Created by karpukdm on 10/24/16.
 */
public class LoginModel implements Serializable {

    private String email;

    private String password;

    private Boolean rememberMe;

    public LoginModel() {
    }

    public LoginModel(String email) {
        this.email = email;
    }

    public LoginModel(String email, String password) {
        this.email = email;
        this.password = password;
        this.rememberMe = true;
    }

    public LoginModel(String email, String password, Boolean rememberMe) {
        this.email = email;
        this.password = password;
        this.rememberMe = rememberMe;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean isRememberMe() {
        return rememberMe;
    }

    public void setRememberMe(Boolean rememberMe) {
        this.rememberMe = rememberMe;
    }
}
