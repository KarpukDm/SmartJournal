package com.smartjournal.service.impl;

import com.smartjournal.entity.AppModel;
import com.smartjournal.repository.AppRepository;
import com.smartjournal.service.AppService;
import com.smartjournal.service.common.impl.GenericServiceImpl;
import org.springframework.stereotype.Service;

/**
 * Created by karpukdm on 10/24/16.
 */
@Service
public class AppServiceImpl extends GenericServiceImpl<AppModel, String, AppRepository> implements AppService {
    public AppServiceImpl(AppRepository repository) {
        super(repository);
    }

    @Override
    public AppModel findOneByName(String name) {
        return repository.findOneByName(name);
    }
}
