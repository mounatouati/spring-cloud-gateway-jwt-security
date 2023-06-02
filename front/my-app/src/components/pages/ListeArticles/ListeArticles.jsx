import React from 'react'
import  { useState ,useContext} from "react";
import { Request } from "../../../utils/requests";
import { UserContext } from '../../contexts/UserContext';

export default function ListeArticles() {

    const [ArticleInputTitle, setArticleInputTitle] = useState("");
    const [ArticleInput, setArticleInput] = useState("");
    const [message, setMessage] = useState("");
    const { user, setUser } = useContext(UserContext);
    function handleArticleTitle(e){
      setArticleInputTitle(e.target.value)
    }
    function handleArticle(e){
      setArticleInput(e.target.value)
    }
    async function validate(e){
      e.preventDefault();
      const data = await Request.postAuthorization("/article/add", { title: ArticleInputTitle, content:ArticleInput }, "POST");
      
      setUser(data.data.user)
      setArticleInputTitle("");
      setArticleInput("");
      setMessage("Article créer");
    }
    console.log(user);
  return (
    <div>
    <form style={{
      display:"flex",
            justifyContent:"center",
            margin:"1em",
            padding:"1em",
            borderRadius:"1em",
            }}     >
      <input onChange={handleArticleTitle} value={ArticleInputTitle} placeholder="Titre " />
      <input onChange={handleArticle} value={ArticleInput} placeholder="Description" />
      <button style={{backgroundColor:"#d2b48c",borderBlock:"none"}} onClick={validate}>Ajouter un article </button>
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

