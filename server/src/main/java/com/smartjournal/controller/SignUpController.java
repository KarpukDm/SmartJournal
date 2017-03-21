package com.smartjournal.controller;

import com.smartjournal.dto.SignUpDTO;
import com.smartjournal.model.Account;
import com.smartjournal.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

@RestController
@RequestMapping("api/signUp")
public class SignUpController {

    private final UserServiceImpl userService;

    @Autowired
    public SignUpController(UserServiceImpl userService) {

        this.userService = userService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public DeferredResult signUp(@RequestBody SignUpDTO signUpDTO) {

        DeferredResult deferredResult = new DeferredResult();
        Account account = new Account();
        account.setEmail(signUpDTO.getEmail());
        account.setPassword(signUpDTO.getPassword());
        userService.save(account);

        deferredResult.setResult(new ResponseEntity(account, HttpStatus.OK));

        return deferredResult;
    }
}
