package com.smartjournal.service.impl;

import com.smartjournal.model.Account;
import com.smartjournal.repository.AccountRepository;
import com.smartjournal.service.common.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl extends AbstractServiceImpl<Account, Long, AccountRepository> {

    public AccountServiceImpl(final AccountRepository repository) {
        super(repository);
    }

    public Account findOneUserByLoginAndPassword(final String login,
                                                 final String password) {
        return this.repository.findOneUserByLoginAndPassword(login, password);
    }
}
