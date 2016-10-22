package com.smartjournal.service.common.impl;

import com.smartjournal.service.common.GenericService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Persistable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.util.List;

/**
 * Created by KarpukDM on 23.10.2016.
 */
@Service
@Transactional
public abstract class GenericServiceImpl<T extends Persistable<ID>, ID extends Serializable,
        Repository extends JpaRepository<T, ID>> implements GenericService<T, ID> {

    protected final Repository repository;

    @Autowired
    public GenericServiceImpl(Repository repository) {
        this.repository = repository;
    }

    @Override
    public long count() {
        return repository.count();
    }

    @Override
    public void delete(ID id) {
        repository.delete(id);
    }

    @Override
    public void delete(Iterable<? extends T> entities) {
        repository.delete(entities);
    }

    @Override
    public void delete(T entity) {
        repository.delete(entity);
    }

    @Override
    public void deleteAll() {
        repository.deleteAll();
    }

    @Override
    public void deleteAllInBatch() {
        repository.deleteAllInBatch();
    }

    @Override
    public void deleteInBatch(Iterable<T> entities) {
        repository.deleteInBatch(entities);
    }

    @Override
    public boolean exists(ID id) {
        return repository.exists(id);
    }

    @Override
    public List<T> findAll() {
        return repository.findAll();
    }

    @Override
    public Iterable<T> findAll(Iterable<ID> ids) {

        return repository.findAll();
    }

    @Override
    public Page<T> findAll(Pageable pageable) {

        return repository.findAll(pageable);
    }

    @Override
    public List<T> findAll(Sort sort) {
        return repository.findAll(sort);
    }

    @Override
    public T findOne(ID id) {
        return repository.findOne(id);
    }

    @Override
    public void flush() {
        repository.flush();
    }

    @Override
    public <S extends T> List<S> save(Iterable<S> entities) {
        return repository.save(entities);
    }

    @Override
    public <S extends T> S save(S entity) {
        return repository.save(entity);
    }

    @Override
    public T saveAndFlush(T entity) {
        return repository.saveAndFlush(entity);
    }
}
