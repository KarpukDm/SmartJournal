package com.smartjournal.controller;

import com.smartjournal.dto.SignUpDTO;
import com.smartjournal.model.Account;
import com.smartjournal.service.AccountService;
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

    private final AccountService accountService;

    @Autowired
    public SignUpController(final AccountService accountService) {

        this.accountService = accountService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public DeferredResult signUp(final @RequestBody SignUpDTO signUpDTO) {

        DeferredResult deferredResult = new DeferredResult();
        Account account = new Account();
        account.setLogin(signUpDTO.getLogin());
        account.setPassword(signUpDTO.getPassword());
        accountService.save(account);

        deferredResult.setResult(new ResponseEntity(account, HttpStatus.OK));

        return deferredResult;
    }
}
