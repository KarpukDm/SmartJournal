package com.smartjournal.service.impl;

import com.smartjournal.dto.UserModel;
import com.smartjournal.repository.UserRepository;
import com.smartjournal.service.UserService;
import com.smartjournal.service.common.impl.GenericServiceImpl;
import org.springframework.stereotype.Service;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Service
public class UserServiceImpl extends GenericServiceImpl<UserModel, String, UserRepository> implements UserService {

    public UserServiceImpl(UserRepository repository) {
        super(repository);
    }
}
