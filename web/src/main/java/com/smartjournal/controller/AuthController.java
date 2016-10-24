package com.smartjournal.controller;

import com.smartjournal.config.SmartJournalProperties;
import com.smartjournal.dto.AuthResponse;
import com.smartjournal.dto.LoginModel;
import com.smartjournal.entity.UserModel;
import com.smartjournal.security.SecurityUtils;
import com.smartjournal.security.SmartJournalUsernamePasswordAuthToken;
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

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

/**
 * Created by karpukdm on 10/24/16.
 */
@RestController
public class AuthController {

    @Autowired
    private SmartJournalProperties smartJournalProperties;

    @Autowired
    private AuthenticationManager authenticationManager;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity authorize(@Valid @RequestBody LoginModel loginModel,
                                    HttpServletRequest request) throws Exception {

        SmartJournalUsernamePasswordAuthToken authenticationToken =
                new SmartJournalUsernamePasswordAuthToken(loginModel.getEmail(), loginModel.getPassword(), request);
        Authentication authentication = this.authenticationManager.authenticate(authenticationToken);
        SecurityContext securityContext = SecurityContextHolder.getContext();
        securityContext.setAuthentication(authentication);

        if ((loginModel.isRememberMe() == null) ? false : loginModel.isRememberMe()) {
            request.getSession().setMaxInactiveInterval(smartJournalProperties.getRememberMeSessionTimeout()); //2592000 = 30 days;
        } else {
            request.getSession().setMaxInactiveInterval(smartJournalProperties.getSessionTimeout()); //1800 = 30 min;
        }

        UserModel userModel = SecurityUtils.getCurrentUser();
        AuthResponse response = null;
        if (userModel != null) {
            response = new AuthResponse(userModel.getName(), userModel.getEmail());
            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }
}
