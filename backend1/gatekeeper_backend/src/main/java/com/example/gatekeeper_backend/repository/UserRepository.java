package com.example.gatekeeper_backend.repository;

import com.example.gatekeeper_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;


public interface UserRepository extends JpaRepository<User, String>{
    @Modifying
    @Transactional
    @Query("update User u set u.status = ?2 where u.vehicleno = ?1")
    public void updateStatus(String vehicleno, String status);
}
