package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SignUpDTO implements Serializable {

    private String firstName;

    private String lastName;

    private String login;

    private String post;

    private String password;

    private String repeatedPassword;
}
