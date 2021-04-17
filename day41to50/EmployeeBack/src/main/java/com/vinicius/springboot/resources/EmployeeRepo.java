package com.vinicius.springboot.resources;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vinicius.springboot.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Long>{

	void deleteEmployeeById(Long id);

	Optional<Employee> findEmployeeById(Long id);
	
}
