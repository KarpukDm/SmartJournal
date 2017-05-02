package com.smartjournal.dto.mapping;

import com.smartjournal.dto.*;
import com.smartjournal.model.*;
import org.dozer.loader.api.BeanMappingBuilder;
import org.dozer.loader.api.TypeMappingOption;
import org.dozer.loader.api.TypeMappingOptions;

public class CustomMappingBuilder extends BeanMappingBuilder {

    @Override
    protected void configure() {

        mapping(AccountDTO.class, Account.class, TypeMappingOptions.oneWay());

        mapping(DisciplineDTO.class, Discipline.class, TypeMappingOptions.oneWay());

        mapping(DisciplineTypeDTO.class, DisciplineType.class, TypeMappingOptions.oneWay());

        mapping(JournalDTO.class, Journal.class, TypeMappingOptions.oneWay());

        mapping(LayerDTO.class, Layer.class, TypeMappingOptions.oneWay());

        mapping(StatisticsDTO.class, Statistics.class, TypeMappingOptions.oneWay());

        mapping(StatusDTO.class, Status.class, TypeMappingOptions.oneWay());

        mapping(StudentDTO.class, Student.class, TypeMappingOptions.oneWay());

        mapping(AcademicPlanDTO.class, AcademicPlan.class, TypeMappingOptions.oneWay());

        mapping(GroupInfoDTO.class, GroupInfo.class, TypeMappingOptions.oneWay());

        mapping(LessonDTO.class, Lesson.class, TypeMappingOptions.oneWay());
    }
}
