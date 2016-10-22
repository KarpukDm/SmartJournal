package com.smartjournal.service.impl;

import com.smartjournal.dto.JournalTemplateTypeModel;
import com.smartjournal.repository.JournalTemplateTypeRepository;
import com.smartjournal.service.JournalTemplateTypeService;
import com.smartjournal.service.common.impl.GenericServiceImpl;
import org.springframework.stereotype.Service;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Service
public class JournalTemplateTypeServiceImpl extends GenericServiceImpl<JournalTemplateTypeModel, String, JournalTemplateTypeRepository>
        implements JournalTemplateTypeService {

    public JournalTemplateTypeServiceImpl(JournalTemplateTypeRepository repository) {
        super(repository);
    }
}
