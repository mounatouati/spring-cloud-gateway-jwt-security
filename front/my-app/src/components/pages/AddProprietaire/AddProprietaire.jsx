import React from 'react'
import  { useState ,useContext} from "react";
import { Request } from "../../../utils/requests";
import { UserContext } from '../../contexts/UserContext';
import axios from "axios";
import classes from "../../containers/LoginForm/Login.module.css"
export default function AddProprietaire() {

    const [nom, setInputnom] = useState("");
    const [prenom, setInputprenom] = useState("");
    const [email, setInputemail] = useState("");
    const [datenaissance, setInputDateNaissance] = useState("");
    const [message, setMessage] = useState("");
    const { user, setUser } = useContext(UserContext);
    function handlenom(e){
      setInputnom(e.target.value)
    }
    function handleprenom(e){
      setInputprenom(e.target.value)
    }
    function handleemail(e){
      setInputemail(e.target.value)
    }
    function handledatenaissance(e){
      setInputDateNaissance(e.target.value)
    }
    async function validate(e){
      e.preventDefault();

      const token = localStorage.getItem('token');
      console.log(token);
      try {
      let reponse = await fetch('http://localhost:8088/api/v1/immo/addProprietaire',
       {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer "+token
        },
        body: JSON.stringify({ 
          nom:nom,
          prenom: prenom,
          email:email,
          date_naissance:datenaissance,
      })
    });

    console.log(reponse);
 //     setUser(reponse.data.user)
      // setArticleInputTitle("");
      // setArticleInput("");
      // setMessage("Article créer");

  //     const response = await axios.post('http://localhost:8088/api/v1/immo/addProprietaire',
  //     {
  // nom:nom,
  // prenom: prenom,
  // email:email,
  // date_naissance:datenaissance,
  //   });
  // console.log(response);
if (reponse.status === 200) {
  // Rediriger l'utilisateur vers la page suivante
  alert("Proprietaire  créer")
  setMessage("Proprietaire créer");
   window.location.href = '/ListeProprietaire';
  } else {
    throw new Error('Erreur lors de la requête.');
  }
} catch (error) {
  console.error(error);
}
    }
    console.log(user);
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
				// height:"100px",
                // padding: "30px",
                // margin:"30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}    >
      <input className={classes.input} onChange={handlenom} value={nom} placeholder="Nom " />
      <input className={classes.input}  onChange={handleprenom} value={prenom} placeholder="Prenom" />
      <input className={classes.input}  onChange={handleemail} value={email} placeholder="Email " />
      <input className={classes.input}  onChange={handledatenaissance} value={datenaissance} placeholder="Date de naissance " />
     
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

