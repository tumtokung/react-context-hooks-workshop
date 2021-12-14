import React, { useContext,useState } from "react";
import "./Article.css";
import { ArticleContext } from "../../context/articleContext";

const Article = ({ article }) => {
  const { dispatch } = useContext(ArticleContext);
  const [edit,setEdit] =useState(false);
  const [arti,setArti] = useState(article);

  const DeleteArticle = () => {
    dispatch({ type: "DELETE_ARTICLE", article });
  };
  const EditArticle = () => {
    dispatch({ type: "EDIT_ARTICLE", arti });
    setEdit(false);
  };
  const handleInput =(e)=>{
    setArti({...arti,[e.target.name]: e.target.value});
  }

  return (
    <div className="article">
      {!edit ? <><h1>{arti.title}</h1>
      <p>{arti.body}</p>
      <button className="button-delete" type="button" onClick={DeleteArticle}>
        Delete
      </button>
      <button className="button-edit" type="button" onClick={()=>setEdit(true)} style={{backgroundColor:"ButtonShadow"}}>
        edit
      </button></>:
      <>
        <input name="title" defaultValue={arti.title} type="text" className="edit-article" onChange={handleInput}/>
        <input name="body" defaultValue={arti.body} type="text" className="edit-article" onChange={handleInput}/>
        <button className="summit-article" type="button" onClick={EditArticle}>submit</button>
        <button className="back-article" type="button" onClick={()=>setEdit(false)} >back</button>
      </>}
    </div>
  );
};

export default Article;
