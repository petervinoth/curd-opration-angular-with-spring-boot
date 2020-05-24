package com.login.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student")
public class student {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private int id;
	 
	 @Column(name="name")
	 private String name;
	 
	 @Column(name="age")
	 private String age;
	 
	 @Column(name="course")
	 private String course;
	 
	 @Column(name="city")
	 private String city;
	 
	 @Column(name="college")
	 private String college;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCollege() {
		return college;
	}

	public void setCollege(String college) {
		this.college = college;
	}
	 
	 

}
