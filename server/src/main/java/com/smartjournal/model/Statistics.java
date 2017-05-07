package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Statistics implements Serializable{

    @Id
    @GeneratedValue(generator = "statistics", strategy=GenerationType.TABLE)
    @TableGenerator(name = "statistics")
    @Column(name = "id")
    private Long id;

    @Column(name = "date")
    private String date;

    @Column(name = "journalId")
    private Long journalId;

    @OneToOne(cascade = CascadeType.MERGE)
    private Status status;

}
