package com.invisiblealpha.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.Data;
import lombok.ToString;
import net.minidev.json.annotate.JsonIgnore;

@Data
@ToString(exclude = "password")
@Entity
public class User {
	
	public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
	private @JsonIgnore String password;
	
	private String email;
    private String firstName;
    private String lastName;
	private String[] roles;
    
    @SuppressWarnings("unused")
	private User(){};
    
    public User(String email, String password, String... roles) {
		this.email = email;
		this.setPassword(password);
		this.roles = roles;
	}
   
    public void setPassword(String password) {
		this.password = PASSWORD_ENCODER.encode(password);
	}


}
