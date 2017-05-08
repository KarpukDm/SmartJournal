package com.smartjournal.repository;

import com.smartjournal.model.Discipline;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DisciplineRepository extends JpaRepository<Discipline, Long> {

    List<Discipline> findAllByAccountId(Long accountId);
}
