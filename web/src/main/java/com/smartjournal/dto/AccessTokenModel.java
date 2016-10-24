package com.smartjournal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

/**
 * Created by karpukdm on 10/11/16.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AccessTokenModel implements Serializable {

    private String accessToken;

    public AccessTokenModel(String accessToken) {
        this.accessToken = accessToken;
    }

    public AccessTokenModel() {
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
