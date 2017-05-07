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
public class Lesson implements Serializable {

    @Id
    @GeneratedValue(generator = "lesson", strategy=GenerationType.TABLE)
    @TableGenerator(name = "lesson")
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

    @Column(name = "completeFlag")
    private boolean completeFlag;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Statistics> statistics;

}
