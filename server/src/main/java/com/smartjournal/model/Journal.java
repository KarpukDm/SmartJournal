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
public class Journal implements Serializable {

    @Id
    @GeneratedValue(generator = "journal", strategy=GenerationType.TABLE)
    @TableGenerator(name = "journal")
    @Column(name = "id")
    private Long id;

    @Column(name = "journal_name")
    private String journalName;

    @ManyToMany(cascade = CascadeType.MERGE)
    private List<Account> accounts;

    @OneToOne(cascade = CascadeType.ALL)
    private Layer layer;

}
