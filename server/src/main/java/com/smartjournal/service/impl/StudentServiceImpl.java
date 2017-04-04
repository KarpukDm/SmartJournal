package com.smartjournal.service.impl;

import com.smartjournal.model.Student;
import com.smartjournal.repository.StudentRepository;
import com.smartjournal.service.common.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl extends AbstractServiceImpl<Student, Long, StudentRepository> {

    public StudentServiceImpl(final StudentRepository repository) {
        super(repository);
    }
}
