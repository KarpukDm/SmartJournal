package com.smartjournal.dto;

import java.io.Serializable;
import java.util.List;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public class JournalTemplateModel implements Serializable{

    private String id;

    private JournalTemplateTypeModel type;

    private String templateName;

    private JournalTemplateModel parent;

    private List<JournalTemplateModel> child;

    private List<AtomModel> atomModel;

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

    public List<AtomModel> getAtomModel() {
        return atomModel;
    }

    public void setAtomModel(List<AtomModel> atomModel) {
        this.atomModel = atomModel;
    }
}
