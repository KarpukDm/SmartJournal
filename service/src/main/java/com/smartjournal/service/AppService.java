package com.smartjournal.service;

import com.smartjournal.entity.AppModel;
import com.smartjournal.service.common.GenericService;

/**
 * Created by karpukdm on 10/24/16.
 */
public interface AppService extends GenericService<AppModel, Integer> {

    AppModel findOneByName(String name);
}
