package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SignUpDTO {

    private String firstName;

    private String lastName;

    private String login;

    private String post;

    private String password;

    private String repeatedPassword;
}
