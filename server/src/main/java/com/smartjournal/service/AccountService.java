package com.smartjournal.service;

import com.smartjournal.model.Account;
import com.smartjournal.repository.AccountRepository;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private final AccountRepository repository;

    public AccountService(AccountRepository repository) {
        this.repository = repository;
    }

    public Account findOneUserByLoginAndPassword(final String login,
                                                 final String password) {
        return this.repository.findOneUserByLoginAndPassword(login, password);
    }

    public Account save(Account account) {
        return repository.saveAndFlush(account);
    }
}
