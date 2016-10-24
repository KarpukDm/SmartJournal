package com.smartjournal.service.impl;

import com.smartjournal.entity.AtomModel;
import com.smartjournal.repository.AtomRepository;
import com.smartjournal.service.AtomService;
import com.smartjournal.service.common.impl.GenericServiceImpl;
import org.springframework.stereotype.Service;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Service
public class AtomServiceImpl extends GenericServiceImpl<AtomModel, Integer, AtomRepository> implements AtomService {

    public AtomServiceImpl(AtomRepository repository) {
        super(repository);
    }
}
