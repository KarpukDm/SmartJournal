package com.smartjournal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Layer implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "layerName")
    private String layerName;

    @Column(name = "layerType")
    private String layerType;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Layer> layers;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Student> students;

    @OneToMany(cascade = CascadeType.ALL)
    private List<GroupInfo> groupInfo;

}
