
import { Route, Routes, Navigate } from "react-router-dom";

import { useContext } from "react";
import LogOut from "../containers/LogOut/LogOut";
import ListeArticles from "../pages/ListeArticles/ListeArticles";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Profil from "../pages/Profil/Profil";
import ListeLogement from "../pages/ListeLogements/ListeLogement";
import { UserContext } from "../contexts/UserContext";
import ListeLogements from "../pages/ListeLogements/ListeLogement";
import ListeLocataires from "../pages/ListeLocataires/ListeLocataires";
import LoginForm from "../containers/LoginForm/LoginForm";
import SignupForm from "../containers/SignupForm/SignupForm";
import ListeProprietaire from "../pages/ListeProprietaire/ListeProprietaire";
import AddProprietaire from "../pages/AddProprietaire/AddProprietaire";
import AddLogement from "../pages/AddLogement/AddLogement";
export default function Main() {
	const { user } = useContext(UserContext);
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<Home/>} />
				<Route path="/auth" element={user ? <Navigate to={"/"} /> : <Auth />} />
				<Route path="/profil" element={!user ? <Navigate to={"/auth"} /> : <Profil />} /> 
         <Route path="/logout" element={user ? <LogOut/> :<Navigate to={"/auth"} /> } /> 
        <Route path="/ListeArticles" element={ <ListeArticles />} />
		<Route path="/ListeLogements" element={user ? <ListeLogements/> : <Auth />} />
		<Route path="/ListeLocataires" element={user ? <ListeLocataires/> : <Auth />} /> 
		<Route path="/ListeProprietaire" element={user ? <ListeProprietaire/> : <Auth />} /> 
		<Route path="/Login" element={<LoginForm/>} /> 
		<Route path="/Signup" element={<SignupForm/>} /> 
		<Route path="/AddProprietaire" element={<AddProprietaire/>} /> 
		<Route path="/AddLogement" element={<AddLogement/>} /> 
		
			</Routes>
		</div>
	);
	
}

