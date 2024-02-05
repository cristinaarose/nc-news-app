import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://news-app-n80t.onrender.com/api/articles")
      .then((data) => {
        return data.json();
      })
      .then((body) => {
        setArticles(body);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) return <p>Loading....</p>;
  else {
    return (
      <>
        <Routes>
          <Route
            path="/articles"
            element={
              <>
                <Header /> <ArticleList articles={articles} />
              </>
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
