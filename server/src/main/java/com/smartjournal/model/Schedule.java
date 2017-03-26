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
public class Schedule implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Account> accounts;

    @OneToOne(cascade = CascadeType.ALL)
    private Journal journal;

    @OneToOne(cascade = CascadeType.ALL)
    private Discipline discipline;
}
