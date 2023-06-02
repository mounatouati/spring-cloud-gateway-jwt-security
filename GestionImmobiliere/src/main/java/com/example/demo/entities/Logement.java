package com.example.demo.entities;

//import com.example.gestion.immobiliaire.enums.TypeLogementEnum;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Logement {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private double surface; // en mètres carrés
	private String adresse;
	private String dateContruction;
	//TypeLogementEnum typeLogement;
	@ManyToOne
	private Locataire locataire;
	@ManyToOne
	private Proprietaire proprietaire;
}
