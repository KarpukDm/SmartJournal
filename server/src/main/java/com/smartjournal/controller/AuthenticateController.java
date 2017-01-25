package com.smartjournal.controller;

import com.smartjournal.config.SmartJournalProperties;
import com.smartjournal.dto.LoginDTO;
import com.smartjournal.model.User;
import com.smartjournal.repository.UserRepository;
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

    private final UserRepository userRepository;

    private final SmartJournalProperties smartJournalProperties;

    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthenticateController(UserRepository userRepository, SmartJournalProperties smartJournalProperties, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.smartJournalProperties = smartJournalProperties;
        this.authenticationManager = authenticationManager;
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public DeferredResult login(@RequestBody LoginDTO loginDTO, HttpServletRequest request) {

        DeferredResult deferredResult = new DeferredResult();

        SmartJournalUsernamePasswordAuthToken authenticationToken =
                new SmartJournalUsernamePasswordAuthToken(loginDTO.getLogin(), loginDTO.getPassword(), request);
        Authentication authentication = this.authenticationManager.authenticate(authenticationToken);
        SecurityContext securityContext = SecurityContextHolder.getContext();
        securityContext.setAuthentication(authentication);

        /*if ((loginDTO.isRememberMe() == null) ? false : loginDTO.isRememberMe()) {
            request.getSession().setMaxInactiveInterval(smartJournalProperties.getRememberMeSessionTimeout()); //2592000 = 30 days;
        } else {
            request.getSession().setMaxInactiveInterval(smartJournalProperties.getSessionTimeout()); //1800 = 30 min;
        }*/

        User user = SecurityUtils.getCurrentUser();
        if (user != null) {
            deferredResult.setResult(new ResponseEntity(user, HttpStatus.OK));
        }else{
            deferredResult.setResult(new ResponseEntity(HttpStatus.UNAUTHORIZED));
        }

        return deferredResult;
    }
}
