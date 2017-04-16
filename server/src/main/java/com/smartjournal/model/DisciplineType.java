package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.io.Serializable;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DisciplineType implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "type")
    private String type;

    @Column(name = "currentCounter")
    private Integer currentCounter;

    @Column(name = "hoursNumber")
    private Integer hoursNumber;
}
