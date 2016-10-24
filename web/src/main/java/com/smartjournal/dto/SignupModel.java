package com.smartjournal.dto;

import java.io.Serializable;

/**
 * Created by karpukdm on 10/24/16.
 */
public class SignupModel implements Serializable{

    private String name;

    private String email;

    private String password;

    private String repeatedPassword;

    public SignupModel(String name, String email, String password, String repeatedPassword) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.repeatedPassword = repeatedPassword;
    }

    public SignupModel() {
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRepeatedPassword() {
        return repeatedPassword;
    }

    public void setRepeatedPassword(String repeatedPassword) {
        this.repeatedPassword = repeatedPassword;
    }
}
