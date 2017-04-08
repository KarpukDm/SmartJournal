package com.smartjournal.dto.mapping;

import com.smartjournal.dto.AccountDTO;
import com.smartjournal.dto.DisciplineDTO;
import com.smartjournal.dto.JournalDTO;
import com.smartjournal.dto.LayerDTO;
import com.smartjournal.dto.StatisticsDTO;
import com.smartjournal.dto.StatusDTO;
import com.smartjournal.dto.StudentDTO;
import com.smartjournal.model.Account;
import com.smartjournal.model.Discipline;
import com.smartjournal.model.Journal;
import com.smartjournal.model.Layer;
import com.smartjournal.model.Statistics;
import com.smartjournal.model.Status;
import com.smartjournal.model.Student;
import org.dozer.loader.api.BeanMappingBuilder;
import org.dozer.loader.api.TypeMappingOptions;

public class CustomMappingBuilder extends BeanMappingBuilder {

    @Override
    protected void configure() {

        mapping(AccountDTO.class, Account.class, TypeMappingOptions.oneWay());

        mapping(DisciplineDTO.class, Discipline.class, TypeMappingOptions.oneWay());

        mapping(JournalDTO.class, Journal.class, TypeMappingOptions.oneWay());

        mapping(LayerDTO.class, Layer.class, TypeMappingOptions.oneWay());

        mapping(StatisticsDTO.class, Statistics.class, TypeMappingOptions.oneWay());

        mapping(StatusDTO.class, Status.class, TypeMappingOptions.oneWay());

        mapping(StudentDTO.class, Student.class, TypeMappingOptions.oneWay());
    }
}
