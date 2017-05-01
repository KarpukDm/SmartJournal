package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "account")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Account implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Discipline> disciplines;

    @OneToMany(cascade = CascadeType.ALL)
    private List<AcademicPlan> academicPlans;

}
