package com.smartjournal.repository;

import com.smartjournal.entity.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Repository
public interface UserRepository extends JpaRepository<UserModel, String> {

    UserModel findOneUserModelByEmailAndPassword(String email, String password);
}
