package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
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

    @Column(name = "template_name")
    private String templateName;

    @Column(name = "layout")
    private Layer layer;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Observer> observers;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL)
    private List<Student> students;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL)
    private List<Discipline> disciplines;

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

}
