package com.smartjournal.repository;

import com.smartjournal.model.Journal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TemplateRepository extends JpaRepository<Journal,Long> {
}
