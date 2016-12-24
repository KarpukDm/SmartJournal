package com.smartjournal.repository;

import com.smartjournal.model.Discipline;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DisciplineRepository extends JpaRepository<Discipline,Long> {
}
