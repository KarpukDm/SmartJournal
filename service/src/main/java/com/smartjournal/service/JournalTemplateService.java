package com.smartjournal.service;


import com.smartjournal.datamodel.entity.JournalTemplateModel;
import com.smartjournal.service.common.GenericService;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public interface JournalTemplateService extends GenericService<JournalTemplateModel, Integer>{

    JournalTemplateModel findOneByType(String type);

    JournalTemplateModel findOneById(Integer index);
}
