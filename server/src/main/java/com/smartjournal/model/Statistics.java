package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.OneToOne;
import javax.persistence.CascadeType;
import java.io.Serializable;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Statistics implements Serializable{

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "date")
    private String date;

    @OneToOne(cascade = CascadeType.ALL)
    private Status status;

}
