import React from 'react'
import  { useState ,useContext} from "react";
import { Request } from "../../../utils/requests";
import { UserContext } from '../../contexts/UserContext';
import axios from "axios";
import classes from "../../containers/LoginForm/Login.module.css"
export default function AddLogement() {

    const [adresse, setInputadresse] = useState("");
    const [date_construction, setInputdate] = useState("");
    const [surface, setInputsurface] = useState("");
   // const [datenaissance, setInputDateNaissance] = useState("");
    const [message, setMessage] = useState("");
    const { user, setUser } = useContext(UserContext);
    function handleadresse(e){
      setInputadresse(e.target.value)
    }
    function handledate(e){
      setInputdate(e.target.value)
    }
    function handlesurface(e){
      setInputsurface(e.target.value)
    }
    async function validate(e){
      e.preventDefault();
      const token = localStorage.getItem('token');
      console.log(token);
      try {
      let response =  await fetch('http://localhost:8088/api/v1/immo/addLogement',
      {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer "+token
        },
        body: JSON.stringify({ 
          adresse:adresse,
          date_construction: date_construction,
          surface:surface,
      })
    });
  console.log(response);
if (response.status === 200) {
  // Rediriger l'utilisateur vers la page suivante
  alert("Article créer")
  setMessage("Article créer");
  window.location.href = '/ListeLogements';
  }else{
        throw new Error('Erreur lors de la requête.');
      }
    //  setUser(data.data.user)
      // setArticleInputTitle("");
      // setArticleInput("");
    } catch (error) {
      console.error(error);
    }
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
    <form style={{
                width: "20rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}    >
      <input className={classes.input} onChange={handleadresse} value={adresse} placeholder="Adresse " />
      <input className={classes.input}  onChange={handledate} type="date"  value={date_construction} placeholder="Date construction" />
      <input className={classes.input}  onChange={handlesurface} value={surface} placeholder="Surface " />
      
      <button className={classes.button} onClick={validate}>Valider </button>
    <p>{message}</p> 
    </form>
    {/* {user.articles.map((article) => {
        return (
          <div key={article._id}
          style={{
            borderWidth:"2px",
            borderStyle:'solid', 
            margin:"1em",
            padding:"1em",
            borderRadius:"1em"
            }}     
          >
            <h3>{article.title}</h3>
          </div>
        )
      })} */}
  </div>
  )
}

