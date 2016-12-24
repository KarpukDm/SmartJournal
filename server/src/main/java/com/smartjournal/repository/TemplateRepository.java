package com.smartjournal.repository;

import com.smartjournal.model.Template;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TemplateRepository extends JpaRepository<Template,Long> {
}
