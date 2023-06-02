package com.example.demo.services;


import java.util.List;

import com.example.demo.entities.Locataire;
import com.example.demo.entities.Logement;
import com.example.demo.entities.Proprietaire;

public interface ImmoService {
	Locataire saveLocataire(Locataire locataire);
	Proprietaire saveProprietaire(Proprietaire proprietaire);
	Proprietaire updateProprietaire(Proprietaire proprietaire);
	Logement saveLogement(Logement logement);
	Logement updateLogement(Logement logement);
	void  mergeLogementProprietaire(Logement logement, Proprietaire proprietaire);
    void  mergeLogementLocataire(Logement logement, Locataire locataire);
	Locataire  updateLocataire(Locataire locataire);
	List<Locataire> ListLocataires();
	List<Proprietaire> ListProprietaire();
	List<Logement> ListLogement();
}
