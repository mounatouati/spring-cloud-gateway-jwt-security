import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";

export default function ListeProprietaire() {
    const [proprietaires, setProprietaire] = useState([]);
    const token = localStorage.getItem('token');
 
  useEffect(() => {
    axios.get('http://localhost:8088/api/v1/immo/proprietaires', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
      })
      .then(response => {
        console.log(response.data)
        setProprietaire(response.data);
      })
      .catch(error => {
        console.error(error);
      });  
  }, []);
  const faireRedirection = () =>{ 
    window.location.href = '/AddProprietaire';
    
  }
  return (
    <div         
    style={{
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
    }}>Liste des Proprietaires </h3>
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
{proprietaires.map((article) => {
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
      <td>{article.email} </td>
    </tr>
        )
    })}
    </tbody>
       
      </table>
            {/* <ul>{article.nom} | {article.prenom}</ul>  */}
           
            </div>
            <button style={{ 
            backgroundColor:'#D6F5F0',
            width: "15%",
            padding: "5px  10px",
            margin:"20px",
            borderRadius: "30px" }} onClick={faireRedirection}>Ajouter  </button>
       </div>
      

  )
}
