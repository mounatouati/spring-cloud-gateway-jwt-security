package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Locataire;
import com.example.demo.entities.Logement;
import com.example.demo.entities.Proprietaire;
import com.example.demo.repositories.LocataireRepository;
import com.example.demo.repositories.LogementRepository;
import com.example.demo.repositories.ProprietaireRepository;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class ImmoServiceImp implements ImmoService{
	@Autowired
	LocataireRepository locataireRepository;
	@Autowired
	ProprietaireRepository proprietaireRepository;
	@Autowired
	LogementRepository logementRepository;
	
	
	@Override
	public Locataire saveLocataire(Locataire locataire) {
	
		return locataireRepository.save(locataire);
	}

	@Override
	public Proprietaire saveProprietaire(Proprietaire proprietaire) {
			return proprietaireRepository.save(proprietaire);
	}

	@Override
	public Logement saveLogement(Logement logement) {
			return logementRepository.save(logement);
	}
	
	@Override
	public void mergeLogementProprietaire(Logement logement, Proprietaire proprietaire) {
		logement.setProprietaire(proprietaire);
        proprietaire.getLogements().add(logement);
        logementRepository.save(logement);
        proprietaireRepository.save(proprietaire);
		
	}

	@Override
	public void mergeLogementLocataire(Logement logement, Locataire locataire) {
		  logement.setLocataire(locataire);
	        locataire.getLogements().add(logement);
	        logementRepository.save(logement);
	        locataireRepository.save(locataire);
		
	}
	@Override
	public Proprietaire updateProprietaire(Proprietaire proprietaire) {
			return null;
	}

	@Override
	public Logement updateLogement(Logement logement) {
			return null;
	}

	@Override
	public Locataire updateLocataire(Locataire locataire) {
		Optional<Locataire> existinglocataire = locataireRepository.findByNom(locataire.getNom());	
		if(!existinglocataire.isPresent()) {
			
			throw new IllegalArgumentException("Attention l'utilisateur avec cette email n'existe pas");
		}
		
			return locataireRepository.save(locataire);
	
}

	@Override
	public List<Locataire> ListLocataires() {
		return locataireRepository.findAll();
	}

	@Override
	public List<Proprietaire> ListProprietaire() {
		return proprietaireRepository.findAll();
	}

	@Override
	public List<Logement> ListLogement() {
		return logementRepository.findAll();
	}
}
