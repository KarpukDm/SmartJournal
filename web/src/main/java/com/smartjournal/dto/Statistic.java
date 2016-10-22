package com.smartjournal.dto;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by KarpukDM on 22.10.2016.
 */
public class Statistic implements Serializable {

    private String id;

    private Date date;

    private Status status;

    public Statistic(Date date, Status status) {
        this.date = date;
        this.status = status;
    }

    public Statistic() {
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

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
