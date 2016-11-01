package com.smartjournal.service.common;

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
public class GenericServiceImpl<T extends Persistable<ID>, ID extends Serializable,
        Repository extends JpaRepository<T, ID>> {

    protected final Repository repository;

    @Autowired
    public GenericServiceImpl(Repository repository) {
        this.repository = repository;
    }

    public long count() {
        return repository.count();
    }

    public void delete(ID id) {
        repository.delete(id);
    }

    public void delete(Iterable<? extends T> entities) {
        repository.delete(entities);
    }

    public void delete(T entity) {
        repository.delete(entity);
    }

    public void deleteAll() {
        repository.deleteAll();
    }

    public void deleteAllInBatch() {
        repository.deleteAllInBatch();
    }

    public void deleteInBatch(Iterable<T> entities) {
        repository.deleteInBatch(entities);
    }

    public boolean exists(ID id) {
        return repository.exists(id);
    }

    public List<T> findAll() {
        return repository.findAll();
    }

    public Iterable<T> findAll(Iterable<ID> ids) {

        return repository.findAll();
    }

    public Page<T> findAll(Pageable pageable) {

        return repository.findAll(pageable);
    }

    public List<T> findAll(Sort sort) {
        return repository.findAll(sort);
    }

    public T findOne(ID id) {
        return repository.findOne(id);
    }

    public void flush() {
        repository.flush();
    }

    public <S extends T> List<S> save(Iterable<S> entities) {
        return repository.save(entities);
    }

    public <S extends T> S save(S entity) {
        return repository.save(entity);
    }

    public T saveAndFlush(T entity) {
        return repository.saveAndFlush(entity);
    }
}
