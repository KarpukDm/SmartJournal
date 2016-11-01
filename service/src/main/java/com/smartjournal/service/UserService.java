package com.smartjournal.service;

import com.smartjournal.datamodel.entity.UserModel;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public interface UserService {
    UserModel findOneUserModelByEmailAndPassword(String email, String password);
}
