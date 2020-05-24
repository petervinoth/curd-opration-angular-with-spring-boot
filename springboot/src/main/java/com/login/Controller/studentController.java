package com.login.Controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.ui.Model;

import com.login.Model.student;
import com.login.Repository.studentRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class studentController {
	
	@Autowired
	studentRepository repository;
	
	
	
	@GetMapping("/student")
	public List<student> getList(){
		return repository.findAll();
	}
	
	@PostMapping("/student")
	public ModelAndView create(@Valid @RequestBody student Student) {
		ModelAndView model=new ModelAndView();
		repository.save(Student);
		return model;
		
	}
	
	@GetMapping("/student/{id}")
	public ResponseEntity<student> edit(@PathVariable ("id") int id)   {
	  student Student=repository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid student Id:" + id));
		
		return ResponseEntity.ok().body(Student);
	}
	@PutMapping("/student/{id}")
	public ResponseEntity<student> update(@PathVariable ("id") int id,@Valid @RequestBody student Student){
		student stu=repository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid student Id:" + id));
		stu.setName(Student.getName());
		stu.setAge(Student.getAge());
		stu.setCourse(Student.getCourse());
		stu.setCity(Student.getCity());
		stu.setCollege(Student.getCollege());
		student studes=repository.save(Student);
		return ResponseEntity.ok().body(Student);
 
		
		
	}
	@DeleteMapping("/student/{id}")
	public void delete(@PathVariable int id) {
		 repository.deleteById(id);
		
	}
	  
	
	

}
