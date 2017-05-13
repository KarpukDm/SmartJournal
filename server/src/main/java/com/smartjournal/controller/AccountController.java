package com.smartjournal.controller;

import com.smartjournal.model.Account;
import com.smartjournal.service.AccountService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class AccountController {

    private final AccountService accountService;

    public AccountController(final AccountService accountService) {
        this.accountService = accountService;
    }

    @RequestMapping(value = "/all")
    public List<Account> getAllAccounts() {
        return accountService.findAll();
    }

    @RequestMapping
    public List<Account> getAccountsByName(final @RequestParam(name = "name") String name) {
        return accountService.findAllByName(name);
    }
}
