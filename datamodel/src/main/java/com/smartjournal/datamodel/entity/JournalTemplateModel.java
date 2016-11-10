package com.smartjournal.datamodel.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.domain.Persistable;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
public class JournalTemplateModel implements Serializable, Persistable<Integer> {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "index")
    private Integer index;

    @Column(name = "template_name", nullable = false)
    private String templateName;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "accessType")
    private String accessType;

    @OneToMany(cascade = CascadeType.ALL)
    private List<JournalTemplateModel> child;

    @OneToMany(cascade = CascadeType.ALL)
    private List<AtomModel> atoms;

    public JournalTemplateModel(String type, String templateName, String password) {
        this.type = type;
        this.templateName = templateName;
        this.password = password;
    }

    public JournalTemplateModel(String type, Integer index, String templateName, String password, List<JournalTemplateModel> child) {
        this.type = type;
        this.index = index;
        this.templateName = templateName;
        this.password = password;
        this.child = child;
    }

    public JournalTemplateModel(String type, Integer index, String templateName, String password, List<JournalTemplateModel> child, List<AtomModel> atoms) {
        this.type = type;
        this.index = index;
        this.templateName = templateName;
        this.password = password;
        this.child = child;
        this.atoms = atoms;
    }

    public JournalTemplateModel() {
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

    public String getTemplateName() {
        return templateName;
    }

    public void setTemplateName(String templateName) {
        this.templateName = templateName;
    }

    public List<JournalTemplateModel> getChild() {
        return child;
    }

    public void setChild(List<JournalTemplateModel> child) {
        this.child = child;
    }

    public List<AtomModel> getAtoms() {
        return atoms;
    }

    public void setAtoms(List<AtomModel> atoms) {
        this.atoms = atoms;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public String getAccessType() {
        return accessType;
    }

    public void setAccessType(String accessType) {
        this.accessType = accessType;
    }
}
