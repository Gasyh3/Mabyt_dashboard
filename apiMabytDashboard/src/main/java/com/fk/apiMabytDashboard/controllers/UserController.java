package com.fk.apiMabytDashboard.controllers;

import com.fk.apiMabytDashboard.exception.ResourceNotFoundException;
import com.fk.apiMabytDashboard.models.User;
import com.fk.apiMabytDashboard.repository.UserRepository;
import com.fk.apiMabytDashboard.security.CurrentUser;
import com.fk.apiMabytDashboard.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
}
