package com.smartjournal.controller;

import com.smartjournal.dto.LoginDTO;
import com.smartjournal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

@RestController
@RequestMapping("/api")
public class AuthenticateController {

    private final UserRepository userRepository;

    @Autowired
    public AuthenticateController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public DeferredResult login(@RequestBody LoginDTO loginDTO) {

        DeferredResult deferredResult = new DeferredResult();
        deferredResult.setResult(new ResponseEntity(loginDTO, HttpStatus.OK));

        return deferredResult;
    }

    @RequestMapping(path = "/test", method = RequestMethod.POST)
    public DeferredResult test() {

        DeferredResult deferredResult = new DeferredResult();
        deferredResult.setResult(new ResponseEntity("Test successful", HttpStatus.OK));

        return deferredResult;
    }
}
