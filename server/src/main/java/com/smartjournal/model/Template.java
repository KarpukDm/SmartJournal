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
    @ManyToMany
    private List<Observer> observers;

    @JsonIgnore
    @OneToMany
    private List<Student> students;

    @JsonIgnore
    @OneToMany
    private List<Discipline> disciplines;

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class Layer implements Serializable{

        private String layerName;

        private String layerType;

        private List<Layer> layers;

        private List<Student> students;

        private Boolean isLast;
    }

}
