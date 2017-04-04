package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import java.io.Serializable;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Status implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column
    private Boolean isThere;

    @Column
    private String mark;
}
