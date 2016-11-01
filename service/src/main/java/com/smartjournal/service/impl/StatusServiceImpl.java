package com.smartjournal.service.impl;

import com.smartjournal.datamodel.entity.StatusModel;
import com.smartjournal.repository.StatusRepository;
import com.smartjournal.service.StatusService;
import com.smartjournal.service.common.GenericServiceImpl;
import org.springframework.stereotype.Service;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Service
public class StatusServiceImpl extends GenericServiceImpl<StatusModel, Integer, StatusRepository> implements StatusService {

    public StatusServiceImpl(StatusRepository repository) {
        super(repository);
    }
}
