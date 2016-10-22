package com.smartjournal.dto;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public class StatisticModel implements Serializable {

    private String id;

    private Date date;

    private StatusModel statusModel;

    public StatisticModel(Date date, StatusModel statusModel) {
        this.date = date;
        this.statusModel = statusModel;
    }

    public StatisticModel() {
    }

    public String getId() {
        return id;
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

    public StatusModel getStatusModel() {
        return statusModel;
    }

    public void setStatusModel(StatusModel statusModel) {
        this.statusModel = statusModel;
    }
}
