package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

/**
 * Created by karpukdm on 10/11/16.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AuthLinkModel implements Serializable {

    private String authLink;

    public AuthLinkModel(String authLink) {
        this.authLink = authLink;
    }

    public AuthLinkModel() {
    }

    public String getAuthLink() {
        return authLink;
    }

    public void setAuthLink(String authLink) {
        this.authLink = authLink;
    }
}
