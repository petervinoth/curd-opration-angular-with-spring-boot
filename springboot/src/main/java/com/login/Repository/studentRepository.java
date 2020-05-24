package com.login.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.login.Model.student;

@Component
@Repository("studentRepository")
public interface studentRepository extends JpaRepository<student,Integer> {

}
