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
    @GeneratedValue(generator = "discipline", strategy=GenerationType.TABLE)
    @TableGenerator(name = "discipline")
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "accountId")
    private Long accountId;

    @OneToMany(cascade = CascadeType.ALL)
    private List<DisciplineType> disciplineTypes;

}
