package com.smartjournal.service;


import com.smartjournal.datamodel.entity.JournalTemplateModel;
import com.smartjournal.service.common.GenericService;

import java.util.List;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public interface JournalTemplateService extends GenericService<JournalTemplateModel, Integer>{

    JournalTemplateModel findOneByType(String type);

    JournalTemplateModel findOneByIdAndIndex(Integer id, Integer index);

    List<JournalTemplateModel> findAllByIndexAndAccessType(Integer index, String accessType);
}
