package com.smartjournal.util;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import javax.servlet.http.HttpServletRequest;

public class SmartJournalUsernamePasswordAuthToken extends UsernamePasswordAuthenticationToken {

    private HttpServletRequest httpServletRequest;

    public SmartJournalUsernamePasswordAuthToken(final Object principal,
                                                 final Object credentials,
                                                 final HttpServletRequest httpServletRequest) {
        super(principal, credentials);
        this.httpServletRequest = httpServletRequest;
    }

    public SmartJournalUsernamePasswordAuthToken(final Object principal,
                                                 final Object credentials) {
        super(principal, credentials);
    }

    public HttpServletRequest getHttpServletRequest() {
        return httpServletRequest;
    }
}
