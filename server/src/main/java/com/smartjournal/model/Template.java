package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Template implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @ManyToMany
    private ArrayList<Observer> observers;

    @OneToMany
    private ArrayList<Student> students;

    @OneToMany
    private ArrayList<Discipline> disciplines;

}
