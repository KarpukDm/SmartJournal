package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.persistence.CascadeType;
import java.io.Serializable;

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

    @ManyToOne(cascade = CascadeType.ALL)
    private Schedule schedule;
}
