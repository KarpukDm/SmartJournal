package com.smartjournal.dto;

import org.springframework.data.domain.Persistable;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Entity
public class StatisticModel implements Serializable, Persistable<String> {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private String id;

    @Column(name = "date")
    private Date date;

    @Column(name = "value")
    private StatusModel value;

    @OneToMany(cascade = CascadeType.ALL)
    private List<StatusModel> statuses;

    public StatisticModel(Date date, StatusModel value) {
        this.date = date;
        this.value = value;
    }

    public StatisticModel() {
    }

    public String getId() {
        return id;
    }

    @Override
    public boolean isNew() {
        return false;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public StatusModel getValue() {
        return value;
    }

    public void setValue(StatusModel value) {
        this.value = value;
    }

    public List<StatusModel> getStatuses() {
        return statuses;
    }

    public void setStatuses(List<StatusModel> statuses) {
        this.statuses = statuses;
    }
}
