package com.smartjournal.repository;

import com.smartjournal.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,Long> {

    Account findOneUserByLoginAndPassword(String login, String password);
}
