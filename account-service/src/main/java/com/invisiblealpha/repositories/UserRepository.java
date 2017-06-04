package com.invisiblealpha.repositories;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.invisiblealpha.domain.User;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {

	 List<User> findByLastName(String lastName);
	 List<User> findByFirstName(String firstname);
	 List<User> findByEmail(String email);
	 List<User> findById(Long id);
	 
}
