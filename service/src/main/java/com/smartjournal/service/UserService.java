package com.smartjournal.service;

import com.smartjournal.entity.UserModel;
import com.smartjournal.service.common.GenericService;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public interface UserService extends GenericService<UserModel, String>{
    UserModel findOneUserModelByEmailAndPassword(String email, String password);
}
