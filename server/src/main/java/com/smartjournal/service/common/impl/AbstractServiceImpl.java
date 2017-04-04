package com.smartjournal.service.common.impl;

import com.smartjournal.service.common.AbstractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.util.List;

@Service
@Transactional
public abstract class AbstractServiceImpl<T, ID extends Serializable,
        Repository extends JpaRepository<T, ID>> implements AbstractService<T, ID> {

    protected final Repository repository;

    @Autowired
    public AbstractServiceImpl(final Repository repository) {
        this.repository = repository;
    }

    @Override
    public long count() {
        return repository.count();
    }

    @Override
    public void delete(final ID id) {
        repository.delete(id);
    }

    @Override
    public void delete(final Iterable<? extends T> entities) {
        repository.delete(entities);
    }

    @Override
    public void delete(final T entity) {
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
    public void deleteInBatch(final Iterable<T> entities) {
        repository.deleteInBatch(entities);
    }

    @Override
    public boolean exists(final ID id) {
        return repository.exists(id);
    }

    @Override
    public List<T> findAll() {
        return repository.findAll();
    }

    @Override
    public Iterable<T> findAll(final Iterable<ID> ids) {

        return repository.findAll();
    }

    @Override
    public Page<T> findAll(final Pageable pageable) {

        return repository.findAll(pageable);
    }

    @Override
    public List<T> findAll(final Sort sort) {
        return repository.findAll(sort);
    }

    @Override
    public T findOne(final ID id) {
        return repository.findOne(id);
    }

    @Override
    public void flush() {
        repository.flush();
    }

    @Override
    public <S extends T> List<S> save(final Iterable<S> entities) {
        return repository.save(entities);
    }

    @Override
    public <S extends T> S save(final S entity) {
        return repository.save(entity);
    }

    @Override
    public T saveAndFlush(final T entity) {
        return repository.saveAndFlush(entity);
    }
}
