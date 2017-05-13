package com.smartjournal.service;

import com.smartjournal.model.Account;
import com.smartjournal.repository.AccountRepository;
import com.smartjournal.util.SecurityUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public List<Account> findAll() {
        return repository.findAll();
    }

    public List<Account> findAllByName(final String name) {

        if (name == null || name.length() == 0) {
            return new ArrayList<>();
        }

        return Optional.ofNullable(repository.findAll())
                .map(account -> account.stream()
                        .filter(x -> x.getLogin().toLowerCase().contains(name.toLowerCase()))
                        .filter(x -> !x.getLogin().equals(SecurityUtils.getCurrentUserLogin()))
                        .collect(Collectors.toList()))
                .orElse(new ArrayList<>());
    }
}
