package com.invisiblealpha.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import com.invisiblealpha.domain.User;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {
	
	public User findByEmail(String emailAddress);
	
    @Override
    @RestResource(exported = false)
    public User save(User s);

    @RestResource(exported = false)
    public void deleteById(String id);

    @Override
    @RestResource(exported = false)
    public void delete(User t);

}
