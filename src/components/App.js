import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList.js";

function App() {
  return (
    <div className = "App">
      <Header/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList/>
    </div>
  );   
}

export default App;
