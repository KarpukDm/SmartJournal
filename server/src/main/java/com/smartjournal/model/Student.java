package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import javax.persistence.ManyToOne;
import javax.persistence.CascadeType;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Student implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @ManyToOne(cascade = CascadeType.ALL)
    private Journal journal;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Statistics> statistics;
}
