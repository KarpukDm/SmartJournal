package com.smartjournal.repository;

import com.smartjournal.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    User findOneUserByEmailAndPassword(String email, String password);
}
