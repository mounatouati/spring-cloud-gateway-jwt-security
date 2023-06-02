import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
// import { Loader } from "@googlemaps/js-api-loader";
export default function ListeLocataires() {
    const [locataires, setLocataire] = useState([]);
    const token = localStorage.getItem('token');
     
  useEffect(() => {
    axios.get('http://localhost:8088/api/v1/immo/locataires', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data)
       
           setLocataire(response.data);
     
       
      })
      .catch(error => {
        console.error(error);
      });
    // fetch("http://localhost:8088/IMMO-SERVICE/logements")
    // .then(response => response.json())
    // .then(data => setLogement(data))
    // .catch(err => console.log(err))
  }, []);

  return (

    <div         style={{
      width: "100%",
      padding: "20px",
      margin:"30px",
      display: "flex",
      flexDirection: "column",
      justifycontent:" center",
      alignItems:"center"
  }}
       >
        <div>
<h3 style={{
   fontSize:"20px",
   color:"brown",
    }}>Liste des Locataires </h3>
</div>
<div>
<table 
          style={{
           // borderWidth:"2px",
           // borderStyle:'solid', 
             margin:"1em",
            width:"30em",
            height:"2em",
            
            }} 
>
        <thead>
        <tr>
      <th>Nom</th>
      <th>Prenom</th>
      <th>Email</th>
    </tr>
    </thead>
    <tbody>
{locataires.map((article) => {
        return (
         
          // style={{
          //   borderWidth:"2px",
          //   borderStyle:'solid', 
          //    margin:"1em",
          //   // padding:"1em",
          //   //borderRadius:"1em",
          //   width:"20em",
          //   height:"2em"
          //   }}     
          
            
    <tr key={article._id}   style={{
      borderWidth:"2px",
      borderStyle:'solid', 
       margin:"1em",
      // padding:"1em",
      //borderRadius:"1em",
    //  width:"500em",
     // height:"3em"
      }}>
      <td >{article.nom}</td>
      <td>{article.prenom}</td>
      <td>{article.adresse} </td>
    </tr>
        )
    })}
    </tbody>
       
      </table>
            {/* <ul>{article.nom} | {article.prenom}</ul>  */}
           
            </div>
       </div>
      


  )
}
