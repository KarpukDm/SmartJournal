package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Status implements Serializable {

    @Id
    @GeneratedValue(generator = "status", strategy= GenerationType.TABLE)
    @TableGenerator(name = "status")
    @Column(name = "id")
    private Long id;

    @Column
    private Integer isThere;

    @Column
    private String mark;
}
