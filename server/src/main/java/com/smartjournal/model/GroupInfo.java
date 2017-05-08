package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class GroupInfo {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "info")
    private String info;
}
