package com.smartjournal.entity;

import org.springframework.data.domain.Persistable;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * Created by KarpukDM on 22.10.2016.
 */
@Entity
public class StatisticModel implements Serializable, Persistable<Integer> {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "date", nullable = false)
    private Date date;

    @Column(name = "value", nullable = false)
    private StatusModel value;

    @OneToMany(cascade = CascadeType.ALL)
    private List<StatusModel> statuses;

    public StatisticModel(Date date, StatusModel value) {
        this.date = date;
        this.value = value;
    }

    public StatisticModel() {
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
