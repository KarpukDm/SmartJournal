package com.smartjournal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.session.SessionAutoConfiguration;

@SpringBootApplication(exclude = {SessionAutoConfiguration.class})
public class ServerApplication {

    public static void main(final String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }
}
