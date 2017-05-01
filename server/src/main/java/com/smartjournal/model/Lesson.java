package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Lesson implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "date")
    private String date;

    @Column(name = "theme")
    private String theme;

    @Column(name = "description")
    private String description;

    @Column(name = "lessonType")
    private String lessonType;

    @Column(name = "isComplete")
    private boolean isComplete;

}
