package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.hibernate.annotations.Columns;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Template implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "layout")
    private Layout layout;

    @ManyToMany
    private ArrayList<Observer> observers;

    @OneToMany
    private ArrayList<Student> students;

    @OneToMany
    private ArrayList<Discipline> disciplines;

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class Layout implements Serializable{

        private String layoutName;

        private List<Layout> layouts;

        private List<Student> students;

        private Boolean isLast;
    }

}
