package com.smartjournal.datamodel.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.domain.Persistable;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by karpukdm on 10/24/16.
 */
@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AppModel implements Serializable, Persistable<Integer> {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "appId")
    private String appId;

    @Column(name = "appSecret")
    private String appSecret;

    public AppModel(String name, String appId, String appSecret) {
        this.name = name;
        this.appId = appId;
        this.appSecret = appSecret;
    }

    public AppModel() {
    }

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getAppSecret() {
        return appSecret;
    }

    public void setAppSecret(String appSecret) {
        this.appSecret = appSecret;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @JsonIgnore
    @Override
    public boolean isNew() {
        return id == null;
    }
}
