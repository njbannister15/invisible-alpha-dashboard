package com.invisiblealpha.domain;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

import lombok.Data;

/**
 * 
 * The UserRegisterCommandDto carries registration data 
 * 
 * @author Nicholas Bannister
 * @since 1.0.0
 */
@Data
public class UserRegisterCommandDto {
	@NotNull
	@NotEmpty
	private String firstName;

	@NotNull
	@NotEmpty
	private String lastName;

	@NotNull
	@NotEmpty
	private String password;
	private String matchingPassword;

	@NotNull
	@NotEmpty
	private String email;
	

	/* Development Learning Notes:
	 * A data transfer object (value object or transfer object) [1] is an object
	 * that carries data between processes. [1]
	 * https://martinfowler.com/eaaCatalog/dataTransferObject.html
	 */

}
