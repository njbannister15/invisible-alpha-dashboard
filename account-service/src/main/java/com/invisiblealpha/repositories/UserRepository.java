package com.invisiblealpha.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.invisiblealpha.domain.User;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {
	User findByEmail(String emailAddress);
}
