package com.smartjournal.service.impl;

import com.smartjournal.model.Template;
import com.smartjournal.repository.TemplateRepository;
import com.smartjournal.service.common.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class TemplateServiceImpl extends AbstractServiceImpl<Template, Long, TemplateRepository> {


    public TemplateServiceImpl(TemplateRepository repository) {
        super(repository);
    }

    public Template findOne(Long id){
        return repository.findOne(id);
    }

    public Template save(Template template){
        return repository.save(template);
    }
}
