package com.smartjournal.dto;

import java.io.Serializable;
import java.util.List;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public class UserModel implements Serializable{

    private String id;

    private String name;

    private String workPlace;

    private String specialty;

    private String profession;

    private List<AtomModel> atomModels;

    private List<JournalTemplateModel> templates;

    public UserModel(String name, String workPlace, String specialty, String profession) {
        this.name = name;
        this.workPlace = workPlace;
        this.specialty = specialty;
        this.profession = profession;
    }

    public UserModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<AtomModel> getAtomModels() {
        return atomModels;
    }

    public void setAtomModels(List<AtomModel> atomModels) {
        this.atomModels = atomModels;
    }

    public List<JournalTemplateModel> getTemplates() {
        return templates;
    }

    public void setTemplates(List<JournalTemplateModel> templates) {
        this.templates = templates;
    }

    public String getWorkPlace() {
        return workPlace;
    }

    public void setWorkPlace(String workPlace) {
        this.workPlace = workPlace;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }
}
