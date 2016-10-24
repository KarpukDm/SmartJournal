package com.smartjournal.repository;

import com.smartjournal.entity.AppModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by karpukdm on 10/24/16.
 */
@Repository
public interface AppRepository extends JpaRepository<AppModel, Integer> {

    AppModel findOneByName(String name);
}
