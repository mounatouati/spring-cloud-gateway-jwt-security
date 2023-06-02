package com.example.demo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Locataire;
import com.example.demo.entities.Logement;
import com.example.demo.entities.Proprietaire;
import com.example.demo.repositories.ProprietaireRepository;
import com.example.demo.services.ImmoService;

@RestController
@RequestMapping(path = "/api/v1/immo")
public class ImmoRestController {
	@Autowired
	private ImmoService immoService;
	@Autowired
	ProprietaireRepository proprietaireRepository;
	
	@PostMapping(path = "/addLocataire")
	public void addLocataire(@RequestBody Locataire locataire) {
		immoService.saveLocataire(locataire);
	}

	@PostMapping(path = "/addProprietaire")
	public void addProprietaire(@RequestBody Proprietaire poprietaire) {
		immoService.saveProprietaire(poprietaire);
	}

	@PostMapping(path = "/addLogement")
	public void addLogement(@RequestBody Logement logement) {
		immoService.saveLogement(logement);
	}
	@GetMapping(path = "/locataires")
	public List<Locataire> ListLocataire() {
		return immoService.ListLocataires();
	}
	@GetMapping(path = "/proprietaires")
	public List<Proprietaire> ListeProprietaire() {
		return immoService.ListProprietaire();
	}
	@GetMapping(path = "/logements")
	public List<Logement> ListeLogement() {
		return immoService.ListLogement();
	}

}
