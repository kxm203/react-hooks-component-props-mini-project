import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList.js";

const { name, image, about, posts } = blogData

function App() {
  return (
    <div className="App">
      <Header name={name}/>
      <About about={about}/>
      <ArticleList posts={posts}/>
    </div>
  );   
}

export default App;
