package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Discipline implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(cascade = CascadeType.ALL)
    private List<DisciplineType> disciplineType;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Lesson> lessons;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Layer> journals;

    @OneToOne(cascade = CascadeType.ALL)
    private Account account;
}
