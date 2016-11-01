package com.smartjournal.service;


import com.smartjournal.datamodel.entity.AppModel;

/**
 * Created by karpukdm on 10/24/16.
 */
public interface AppService {

    AppModel findOneByName(String name);
}
