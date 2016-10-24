package com.smartjournal.entity;

import org.springframework.data.domain.Persistable;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Entity
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
