package com.smartjournal.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class SignUpDTO implements Serializable {

    private String firstName;

    private String lastName;

    private String email;

    private String post;

    private String password;

    private String repeatedPassword;
}
