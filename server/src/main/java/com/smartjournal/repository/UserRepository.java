package com.smartjournal.repository;

import com.smartjournal.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Account,Long> {

    Account findOneUserByEmailAndPassword(String email, String password);
}
