package com.invisiblealpha.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.Data;
import lombok.ToString;
import net.minidev.json.annotate.JsonIgnore;


@Data
@ToString(exclude = "password")
@Entity
@Table(name = "usertable")
public class User {
	
	public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();
	
	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO)
    private long id;	
	
	
    private String firstName;	
	private String lastName;
	
	@Column(unique=true, nullable=false) 
	@Pattern(regexp = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\."
            + "[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@"
            + "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9]"
            + "(?:[a-z0-9-]*[a-z0-9])?")
    private String email;
	
	@JsonIgnore
    private String password;
    
	protected User(){};
	
	public User(User other){
		this.firstName = other.getFirstName();
		this.lastName = other.getLastName();
    	this.email = other.getEmail();		
    	this.password = other.getPassword();
	}

    public User(String firstName, String lastName, String email, String password) {
		this.firstName = firstName;
		this.lastName = lastName;
    	this.email = email;		
		this.setPassword(password);		
	}
   
    public void setPassword(String password) {
		this.password = PASSWORD_ENCODER.encode(password);
	}

    /*
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}
	*/

}
