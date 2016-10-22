package com.smartjournal.dto;

import org.springframework.data.domain.Persistable;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Entity
public class JournalTemplateModel implements Serializable, Persistable<String> {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private String id;

    @Column(name = "type")
    private JournalTemplateTypeModel type;

    @Column(name = "level")
    private Integer level;

    @Column(name = "template_name")
    private String templateName;

    @Column(name = "parent")
    private JournalTemplateModel parent;

    @OneToMany(cascade = CascadeType.ALL)
    private List<JournalTemplateModel> child;

    @OneToMany(cascade = CascadeType.ALL)
    private List<AtomModel> atoms;

    public JournalTemplateModel(JournalTemplateTypeModel type, String templateName) {
        this.type = type;
        this.templateName = templateName;
    }

    public JournalTemplateModel(JournalTemplateTypeModel type, String templateName, JournalTemplateModel parent) {
        this.type = type;
        this.templateName = templateName;
        this.parent = parent;
    }

    public JournalTemplateModel() {
    }

    public String getId() {
        return id;
    }

    @Override
    public boolean isNew() {
        return id == null;
    }

    public void setId(String id) {
        this.id = id;
    }

    public JournalTemplateTypeModel getType() {
        return type;
    }

    public void setType(JournalTemplateTypeModel type) {
        this.type = type;
    }

    public String getTemplateName() {
        return templateName;
    }

    public void setTemplateName(String templateName) {
        this.templateName = templateName;
    }

    public JournalTemplateModel getParent() {
        return parent;
    }

    public void setParent(JournalTemplateModel parent) {
        this.parent = parent;
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

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }
}
