package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.example.demo.entities.Locataire;
@RepositoryRestResource
public interface LocataireRepository extends JpaRepository<Locataire, Long>{
	@RestResource(path = "/byId")
	 Optional<Locataire> findByNom(String nom);


}
