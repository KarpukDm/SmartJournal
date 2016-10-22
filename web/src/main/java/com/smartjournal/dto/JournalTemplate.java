package com.smartjournal.dto;

import java.io.Serializable;
import java.util.List;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public class JournalTemplate implements Serializable{

    private String id;

    private JournalTemplateType type;

    private String templateName;

    private String parent;

    private List<JournalTemplate> child;

    private Atom atom;

    public JournalTemplate(JournalTemplateType type, String templateName) {
        this.type = type;
        this.templateName = templateName;
    }

    public JournalTemplate(String templateName, String parent) {
        this.templateName = templateName;
        this.parent = parent;
    }

    public JournalTemplate() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public JournalTemplateType getType() {
        return type;
    }

    public void setType(JournalTemplateType type) {
        this.type = type;
    }

    public String getTemplateName() {
        return templateName;
    }

    public void setTemplateName(String templateName) {
        this.templateName = templateName;
    }

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }

    public List<JournalTemplate> getChild() {
        return child;
    }

    public void setChild(List<JournalTemplate> child) {
        this.child = child;
    }

    public Atom getAtom() {
        return atom;
    }

    public void setAtom(Atom atom) {
        this.atom = atom;
    }
}
