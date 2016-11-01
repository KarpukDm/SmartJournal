package com.smartjournal.service.impl;

import com.smartjournal.datamodel.entity.UserModel;
import com.smartjournal.repository.UserRepository;
import com.smartjournal.service.UserService;
import com.smartjournal.service.common.impl.GenericServiceImpl;
import org.springframework.stereotype.Service;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Service
public class UserServiceImpl extends GenericServiceImpl<UserModel, Integer, UserRepository> implements UserService {

    public UserServiceImpl(UserRepository repository) {
        super(repository);
    }

    @Override
    public UserModel findOneUserModelByEmailAndPassword(String email, String password) {
        return repository.findOneUserModelByEmailAndPassword(email, password);
    }
}
