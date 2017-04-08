package com.smartjournal.config;

import com.smartjournal.dto.mapping.CustomMappingBuilder;
import org.dozer.DozerBeanMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DozerConfig {

    @Bean
    DozerBeanMapper mapper() {
        DozerBeanMapper dozerBeanMapper = new DozerBeanMapper();
        CustomMappingBuilder customMappingBuilder = new CustomMappingBuilder();
        dozerBeanMapper.addMapping(customMappingBuilder);

        return dozerBeanMapper;
    }
}
