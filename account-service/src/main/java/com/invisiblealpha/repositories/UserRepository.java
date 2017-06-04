package com.invisiblealpha.repositories;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.invisiblealpha.domain.User;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {
	 
}
