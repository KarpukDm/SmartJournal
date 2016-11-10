package com.smartjournal.repository;

import com.smartjournal.datamodel.entity.JournalTemplateModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Repository
public interface JournalTemplateRepository extends JpaRepository<JournalTemplateModel, Integer> {

    JournalTemplateModel findOneByType(String type);

    JournalTemplateModel findOneByIdAndIndex(Integer id, Integer index);

    List<JournalTemplateModel> findAllByIndex(Integer index);
}
