import React, { useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Auth from '../Auth/Auth'
import ListeProprietaire from '../ListeProprietaire/ListeProprietaire';
import ListeLocataires from '../ListeLogements/ListeLogement';
import ListeLogements from '../ListeLogements/ListeLogement';
import Maps from '../Maps/Maps';


export default function Home() {
    
const {user} = useContext(UserContext);


  return (
    <div  >   
        {user === null ? <Auth /> : <div style={{
      width: "100%",
      padding: "20px",
      margin:"30px",
      display: "flex",
      flexDirection: "row",
      justifycontent:" center",
      alignItems:"center"
  }}><ListeProprietaire/> <ListeLogements/></div>}
        
    
       
        {/* <Maps/> */}
    </div>
  )
}
