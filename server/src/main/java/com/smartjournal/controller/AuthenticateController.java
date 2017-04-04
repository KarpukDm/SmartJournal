package com.smartjournal.controller;

import com.smartjournal.config.SmartJournalProperties;
import com.smartjournal.dto.LoginDTO;
import com.smartjournal.model.Account;
import com.smartjournal.util.SecurityUtils;
import com.smartjournal.util.SmartJournalUsernamePasswordAuthToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class AuthenticateController {

    private final SmartJournalProperties smartJournalProperties;

    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthenticateController(final SmartJournalProperties smartJournalProperties,
                                  final AuthenticationManager authenticationManager) {
        this.smartJournalProperties = smartJournalProperties;
        this.authenticationManager = authenticationManager;
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public DeferredResult login(final @RequestBody LoginDTO loginDTO,
                                final HttpServletRequest request) {

        DeferredResult deferredResult = new DeferredResult();

        SmartJournalUsernamePasswordAuthToken authenticationToken =
                new SmartJournalUsernamePasswordAuthToken(loginDTO.getLogin(), loginDTO.getPassword(), request);
        Authentication authentication = this.authenticationManager.authenticate(authenticationToken);
        SecurityContext securityContext = SecurityContextHolder.getContext();
        securityContext.setAuthentication(authentication);

        request.getSession().setMaxInactiveInterval(smartJournalProperties.getRememberMeSessionTimeout()); //2592000 = 30 days;

        /*if ((loginDTO.isRememberMe() == null) ? false : loginDTO.isRememberMe()) {
            request.getSession().setMaxInactiveInterval(smartJournalProperties.getRememberMeSessionTimeout()); //2592000 = 30 days;
        } else {
            request.getSession().setMaxInactiveInterval(smartJournalProperties.getSessionTimeout()); //1800 = 30 min;
        }*/

        Account account = SecurityUtils.getCurrentUser();
        if (account != null) {
            deferredResult.setResult(new ResponseEntity(account, HttpStatus.OK));
        } else {
            deferredResult.setResult(new ResponseEntity(HttpStatus.UNAUTHORIZED));
        }

        return deferredResult;
    }

    @RequestMapping(path = "/logout", method = RequestMethod.GET)
    public ResponseEntity logout(final HttpServletRequest request) {

        request.getSession().invalidate();

        return new ResponseEntity(HttpStatus.OK);
    }
}
