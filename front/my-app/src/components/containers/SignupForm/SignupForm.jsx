import React, { useContext, useState } from "react";
import { Request } from "../../../utils/requests";
import { UserContext } from "../../contexts/UserContext";
import classes from "../LoginForm/Login.module.css";
import axios from "axios";
export default function SignupForm() {

    
//	const monContext = useContext(UserContext);
    const [usernameInput, setUsername] = useState("")
    const [usernameerror, setUsernameerror] = useState("")
    const [userprenomInput, setUserprenom] = useState("")
    const [userprenomerror, setUserprenomerror] = useState("")
    const [emailInput, setEmail] = useState("");
    const [emailerror, setEmailerror] = useState("");
    const [passwordInput, setPassword] = useState("");
    const [passworderror, setPassworderror] = useState("");
    const [confirmPasswordInput, setConfirmPassword] = useState("");
    const [confirmPassworderror, setConfirmPassworderror] = useState(""); 
    const [signupMessage, setSignupMessage] = useState("");

    function handleUsername(e) {
        setUsernameerror("");
        setUsername(e.target.value);
    }
    function handleUserprenom(e) {
        setUserprenomerror("");
        setUserprenom(e.target.value);
    }
    function handleEmail(e) {
        setEmailerror("");
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassworderror("");
        setPassword(e.target.value);
    }

    function handleConfirmPassword(e) {
        setConfirmPassworderror("");
        setConfirmPassword(e.target.value);
    }

    async function signup(e) {
        e.preventDefault();
        setEmailerror("");
        setUsernameerror("");
        setPassworderror("");
        setConfirmPassworderror("");
     //   if (emailInput.includes('@') && passwordInput.length >= 6 && usernameInput.length >= 6 && passwordInput === confirmPasswordInput) {
        const response = await axios.post('http://localhost:8088/api/v1/auth/register',
                {
            //         nom: usernameInput,
            //         prenom: userprenomInput,
            //         email: emailInput,
            //         password: passwordInput,
            // roles:"ADMIN"
            firstname:usernameInput,
            lastname: userprenomInput,
            email:emailInput,
            password:passwordInput,
           roles:[{roleName:"USER"}]
              });
            console.log(response);
			if (response.status === 200) {
            // Rediriger l'utilisateur vers la page suivante
             window.location.href = '/Login';

            }
                else{

                }
            // try {
            //     const response = await axios.post('http://localhost:8088/AUTH-SERVICE/api/v1/auth/register', {
            //       //  const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
                
            //     firstname: usernameInput,
            //         lastname: userprenomInput,
            //         email: emailInput,
            //         password: passwordInput,
            //         roles:[{roleName:"USER"}],

        //             firstname:"mouna2",
        //     lastname:"TOUATI2",
        //     email:"@mouna",
        //     password:"123456",
        //    roles:[{roleName:"USER"}]
            //     });
            //     console.log(response);
            //     localStorage.setItem('token', response.headers.authorization);
                
            //     const responseData = response.data;
            //     const user = responseData.user;
            //  //   monContext.setUser(user);
            //     window.location.href = '/ListeArticles';
            //     if ( response.status === 401) {
            //         setSignupMessage("Votre email existe, connectez-vous!");
            //         return;
            //     }
            // //    monContext.setUser(response.data.user);
            //     setSignupMessage("Inscription réussie!");
            // } catch (error) {
            //     console.error(error);
             // }
    //         const response= await Request.post('http://localhost:8088/AUTH-SERVICE/api/v1/auth/register', {
    //                     firstname: usernameInput,
    //                     lastname: userprenomInput,
    //                     email: emailInput,
    //                     password: passwordInput,
    //                     roles:[{roleName:"USER"}],
    //         });
    //         if (response.status.ok ) {
    //             console.log(response)
	// 			setSignupMessage("Inscription réussie!");
	// 			const data = await response.data.json();
    //             window.location.href = '/Login';
	// 			console.log(data);
	// 			const token = data.token;
	// 			console.log(token);
	// // 		console.log(reponseData);
	// 		localStorage.setItem("token", token);

        //     if ( response.status === 200) {
        //        // localStorage.setItem("token",response.data.token)
        //         setSignupMessage("Connexion réussie!");
        //         return;
        //     }
        //     if ( response.status === 401) {
        //         setSignupMessage("Votre email existe, connectez-vous!");
        //         return;
        //     }
        //    // monContext.setUser(response.data.user);
        //     setSignupMessage("Inscription réussie!");
      //  } 
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
            <h2>Inscription</h2>
            
            <form style={{
                width: "20rem",
				// height:"100px",
                // padding: "30px",
                // margin:"30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <input className={classes.input}
                    placeholder="nom"
                    value={usernameInput}
                    onChange={handleUsername}
                    error={usernameerror}
                />
                <input className={classes.input}
                    placeholder="prenom"
                    value={userprenomInput}
                    onChange={handleUserprenom}
                    error={userprenomerror}
                />
                <input className={classes.input}
                    placeholder="Email"
                    value={emailInput}
                    onChange={handleEmail}
                    error={emailerror}
                />
                <input className={classes.input}

                    placeholder="Mot de passe"
                    type="password"
                    value={passwordInput}
                    onChange={handlePassword}
                    error={passworderror}
                />
                <input className={classes.input}

                    placeholder="Confirmez le mot de passe"
                    type="password"
                    value={confirmPasswordInput}
                    onChange={handleConfirmPassword}
                   error={confirmPassworderror}
                />
                <button className={classes.button} onClick={signup}>Inscription</button>
                <p>{signupMessage}</p>
            </form>
        </div>
    );
}