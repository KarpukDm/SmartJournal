package com.smartjournal.util;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import javax.servlet.http.HttpServletRequest;

public class SmartJournalUsernamePasswordAuthToken extends UsernamePasswordAuthenticationToken {

    private HttpServletRequest httpServletRequest;

    public SmartJournalUsernamePasswordAuthToken(Object principal, Object credentials, HttpServletRequest httpServletRequest) {
        super(principal, credentials);
        this.httpServletRequest = httpServletRequest;
    }

    public SmartJournalUsernamePasswordAuthToken(Object principal, Object credentials) {
        super(principal, credentials);
    }

    public HttpServletRequest getHttpServletRequest() {
        return httpServletRequest;
    }
}
