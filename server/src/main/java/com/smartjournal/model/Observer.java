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
public class Observer implements Serializable {

    @Id @GeneratedValue
    @Column(name = "id")
    private Long id;

    @ManyToMany
    private ArrayList<Template> templates;

    @OneToMany
    private ArrayList<Schedule> schedules;

}
