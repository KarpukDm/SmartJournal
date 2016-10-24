package com.smartjournal.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * Created by karpukdm on 10/24/16.
 */
@Component
@ConfigurationProperties(prefix = "journal")
public class SmartJournalProperties {

    private Integer sessionTimeout = 1800;

    private Integer rememberMeSessionTimeout = 2592000;

    public SmartJournalProperties(Integer sessionTimeout, Integer rememberMeSessionTimeout) {
        this.sessionTimeout = sessionTimeout;
        this.rememberMeSessionTimeout = rememberMeSessionTimeout;
    }

    public SmartJournalProperties() {
    }

    public Integer getSessionTimeout() {
        return sessionTimeout;
    }

    public void setSessionTimeout(Integer sessionTimeout) {
        this.sessionTimeout = sessionTimeout;
    }

    public Integer getRememberMeSessionTimeout() {
        return rememberMeSessionTimeout;
    }

    public void setRememberMeSessionTimeout(Integer rememberMeSessionTimeout) {
        this.rememberMeSessionTimeout = rememberMeSessionTimeout;
    }
}
