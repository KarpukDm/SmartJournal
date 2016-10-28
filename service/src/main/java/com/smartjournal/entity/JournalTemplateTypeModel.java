package com.smartjournal.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.domain.Persistable;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
public class JournalTemplateTypeModel implements Serializable, Persistable<Integer> {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "type", nullable = false)
    private String type;

    public JournalTemplateTypeModel(String type) {
        this.type = type;
    }

    public JournalTemplateTypeModel() {
    }

    public Integer getId() {
        return id;
    }

    @JsonIgnore
    @Override
    public boolean isNew() {
        return id == null;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
