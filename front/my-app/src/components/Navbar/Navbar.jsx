import React from 'react'
import Home from '../pages/Home/Home'
import {  Link } from "react-router-dom";
import Profil from '../pages/Profil/Profil';
import Auth from '../pages/Auth/Auth';
import mesclasses from "../Navbar/Navbar.module.css";
import ListeArticles from '../pages/ListeArticles/ListeArticles';
import LogOut from '../containers/LogOut/LogOut';
export default function Navbar() {
  
    return (
       
            <nav className={mesclasses.container} >
                <div>
                    <ul >
                        <li> <Link to="/">Accueil</Link></li>
                        {/* <li> <Link to="/Profil">Profil</Link></li>
                        <li> <Link to="/logout">Déconnexion </Link></li> */}
                        {/* <li> <Link to="/ListeArticles">Liste Articles</Link></li> */}
                        <li> <Link to="/ListeLogements">Logements</Link></li>
                        <li> <Link to="/ListeLocataires">Locations</Link></li>
                        <li> <Link to="/ListeProprietaire">Proprietaire</Link></li>
                    </ul>
                </div>
                
            </nav>
     
    )
}
