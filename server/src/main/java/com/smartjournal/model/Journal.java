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
public class Journal implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "journal_name")
    private String journalName;

    @Column(name = "layout")
    private Layer layer;

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class Layer implements Serializable {

        @Column(name = "layerName")
        private String layerName;

        @Column(name = "layerType")
        private String layerType;

        @Column(name = "layers")
        private List<Layer> layers;

        @Column(name = "students")
        private List<Student> students;

    }

    @ManyToMany
    private List<Account> accounts;

    @ManyToOne
    private Discipline discipline;

    @OneToMany
    private List<Student> students;
}
