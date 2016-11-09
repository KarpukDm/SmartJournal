package com.smartjournal.service.impl;

import com.smartjournal.datamodel.entity.JournalTemplateModel;
import com.smartjournal.repository.JournalTemplateRepository;
import com.smartjournal.service.JournalTemplateService;
import com.smartjournal.service.common.impl.GenericServiceImpl;
import org.springframework.stereotype.Service;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Service
public class JournalTemplateServiceImpl  extends GenericServiceImpl<JournalTemplateModel, Integer, JournalTemplateRepository>
        implements JournalTemplateService {

    public JournalTemplateServiceImpl(JournalTemplateRepository repository) {
        super(repository);
    }

    @Override
    public JournalTemplateModel findOneByType(String type) {
        return repository.findOneByType(type);
    }
}
