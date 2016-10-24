package com.smartjournal.repository;

import com.smartjournal.entity.StatusModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Repository
public interface StatusRepository extends JpaRepository<StatusModel, Integer> {

}
