import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import ArticleManager from "./components/ArticleManager";
import Error from "./components/Error";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllArticles } from "../api";

function App() {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllArticles()
      .then((data) => {
        setArticles(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);

  if (error) {
    return <Error err={err} />;
  }

  if (isLoading) return <p>Loading....</p>;
  else {
    return (
      <>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/articles"
            element={
              <>
                <ArticleList articles={articles} />
              </>
            }
          />
          <Route
            path="/articles/:article_id"
            element={
              <>
                <ArticleManager />
              </>
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
