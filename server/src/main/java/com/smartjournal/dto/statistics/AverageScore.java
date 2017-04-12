package com.smartjournal.dto.statistics;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class AverageScore {

    @JsonProperty(value = "year")
    private String year;

    @JsonProperty(value = "value")
    private Double value;

    public AverageScore(String year, Double value) {
        this.year = year;
        this.value = value;
    }
}
