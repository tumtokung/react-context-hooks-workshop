import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const initialState = [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" }
  ];
  const [articles, dispatch] = useReducer(reducer,initialState );
  // console.log("children: ",children); 
  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
