package com.smartjournal.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "journal")
public class SmartJournalProperties {

    private Integer sessionTimeout = 1800;

    private Integer rememberMeSessionTimeout = 2592000;

    public SmartJournalProperties(final Integer sessionTimeout,
                                  final Integer rememberMeSessionTimeout) {
        this.sessionTimeout = sessionTimeout;
        this.rememberMeSessionTimeout = rememberMeSessionTimeout;
    }

    public SmartJournalProperties() {
    }

    public Integer getSessionTimeout() {
        return sessionTimeout;
    }

    public void setSessionTimeout(final Integer sessionTimeout) {
        this.sessionTimeout = sessionTimeout;
    }

    public Integer getRememberMeSessionTimeout() {
        return rememberMeSessionTimeout;
    }

    public void setRememberMeSessionTimeout(final Integer rememberMeSessionTimeout) {
        this.rememberMeSessionTimeout = rememberMeSessionTimeout;
    }
}
