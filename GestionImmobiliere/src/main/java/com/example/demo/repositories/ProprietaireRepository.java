package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entities.Proprietaire;
@RepositoryRestResource
public interface ProprietaireRepository extends JpaRepository<Proprietaire, Long>{

}
