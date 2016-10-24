package com.smartjournal.security;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by karpukdm on 10/24/16.
 */
public class SmartJournalUsernamePasswordAuthToken extends UsernamePasswordAuthenticationToken {

    private HttpServletRequest httpServletRequest;

    public SmartJournalUsernamePasswordAuthToken(Object principal, Object credentials, HttpServletRequest httpServletRequest) {
        super(principal, credentials);
        this.httpServletRequest = httpServletRequest;
    }

    public HttpServletRequest getHttpServletRequest() {
        return httpServletRequest;
    }
}