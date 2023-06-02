package com.example.demo;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.entities.Locataire;
import com.example.demo.entities.Logement;
import com.example.demo.entities.Proprietaire;
import com.example.demo.services.ImmoService;

@SpringBootApplication
public class GestionImmobiliereApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionImmobiliereApplication.class, args);
	}
	@Bean
    CommandLineRunner start(ImmoService immoService) {
        return args -> {
//            // Créer un locataire
//           // Locataire locataire = new Locataire("Nom", "Prénom", "01/01/1990", "Adresse");
//            Locataire locataire1 = new Locataire();
//            locataire1.setDateNaissance(new Date());
//            locataire1.setAdresse("mim@live.fr");
//            locataire1.setNom("Momo");
//            locataire1.setPrenom("TALEB");
//            immoService.saveLocataire(locataire1);
//            Locataire locataire2 = new Locataire();
//            locataire2.setDateNaissance(new Date());
//            locataire2.setAdresse("ddd@live.fr");
//            locataire2.setNom("ddd");
//            locataire2.setPrenom("ddd");
//            immoService.saveLocataire(locataire2);
//            Locataire locataire3 = new Locataire();
//            locataire3.setDateNaissance(new Date());
//            locataire3.setAdresse("sss@live.fr");
//            locataire3.setNom("Mssss");
//            locataire3.setPrenom("qqq");
//            immoService.saveLocataire(locataire3);
//            Locataire locataire = new Locataire();
//            locataire.setDateNaissance(new Date());
//            locataire.setAdresse("jean@live.fr");
//            locataire.setNom("jean");
//            locataire.setPrenom("pierre");
//            immoService.saveLocataire(locataire);
//            Proprietaire proprietaire = new Proprietaire();
//            proprietaire.setDateNaissance(new Date());
//            proprietaire.setEmail("sakem@live.fr");
//            proprietaire.setNom("salem");
//            proprietaire.setPrenom("ahmed");
//            immoService.saveProprietaire(proprietaire);
//            Proprietaire proprietaire2 = new Proprietaire();
//            proprietaire2.setDateNaissance(new Date());
//            proprietaire2.setEmail("maram@live.fr");
//            proprietaire2.setNom("maram");
//            proprietaire2.setPrenom("loulou");
//            immoService.saveProprietaire(proprietaire2);
//            Proprietaire proprietaire1 = new Proprietaire();
//            proprietaire1.setDateNaissance(new Date());
//            proprietaire1.setEmail("fati@live.fr");
//            proprietaire1.setNom("med");
//            proprietaire1.setPrenom("fathi");
//            immoService.saveProprietaire(proprietaire1);
//            Proprietaire proprietaire3= new Proprietaire();
//            proprietaire3.setDateNaissance(new Date());
//            proprietaire3.setEmail("isalem@live.fr");
//            proprietaire3.setNom("marie");
//            proprietaire3.setPrenom("lopez");
//            immoService.saveProprietaire(proprietaire3);
//            // Créer un propriétaire
//           // Proprietaire proprietaire = new Proprietaire("Nom", "Prénom", "email@example.com", "02/03/1990");
//
//            // Créer un logement
//            Logement logement = new Logement();
//            logement.setSurface(125);
//            logement.setAdresse("5 mail pierres desproges");
//            logement.setDateContruction("15/05/1989");
//            immoService.saveLogement(logement);
//            Logement logement1 = new Logement();
//            logement1.setSurface(125);
//            logement1.setAdresse("10 deni desproges");
//            logement1.setDateContruction("15/05/1900");
//            immoService.saveLogement(logement1);
//            Logement logement2 = new Logement();
//            logement2.setSurface(125);
//            logement2.setAdresse("1 jeans pierre");
//            logement2.setDateContruction("15/05/1989");
//            immoService.saveLogement(logement2);
//            Logement logement3 = new Logement();
//            logement3.setSurface(125);
//            logement3.setAdresse("1 rue Montgolfier");
//            logement3.setDateContruction("15/05/1989");
//            immoService.saveLogement(logement3);
//            Logement logement4 = new Logement();
//            logement4.setSurface(125);
//            logement4.setAdresse("51 av. jean lolive ");
//            logement4.setDateContruction("15/05/1989");
//            immoService.saveLogement(logement4);
//            immoService.mergeLogementProprietaire(logement, proprietaire);
//            immoService.mergeLogementProprietaire(logement1, proprietaire);
//            immoService.mergeLogementProprietaire(logement2, proprietaire);
//            immoService.mergeLogementLocataire(logement, locataire1);
//            immoService.mergeLogementLocataire(logement2, locataire2);
            
            
           // Logement logement = new Logement(100.50, "Adresse du logement", "01/01/2000",locataire1,proprietaire);
           
            // Attribuer le locataire et le propriétaire au logement
          //  logement.setLocataire(locataire);
           // logement.setProprietaire(proprietaire);
        };
    }
}
