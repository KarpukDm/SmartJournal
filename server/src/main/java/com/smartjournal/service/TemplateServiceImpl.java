package com.smartjournal.service;

import com.smartjournal.model.Template;
import com.smartjournal.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TemplateServiceImpl {

    private final TemplateRepository templateRepository;

    @Autowired
    public TemplateServiceImpl(TemplateRepository templateRepository) {
        this.templateRepository = templateRepository;
    }

    public Optional<Template> findOne(Long id){
        return Optional.ofNullable(templateRepository.findOne(id));
    }

    public Template save(Template template){
        return templateRepository.save(template);
    }
}
