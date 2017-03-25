package com.smartjournal.service.impl;

import com.smartjournal.model.Account;
import com.smartjournal.repository.AccountRepository;
import com.smartjournal.service.common.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl extends AbstractServiceImpl<Account, Long, AccountRepository> {

    public AccountServiceImpl(AccountRepository repository) {
        super(repository);
    }

    public Account findOneUserByLoginAndPassword(String login, String password){
        return this.repository.findOneUserByLoginAndPassword(login, password);
    }
}
