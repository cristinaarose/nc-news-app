import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import ArticleManager from "./components/ArticleManager";
import Error from "./components/Error";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import UserManager from "./components/UserManager";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllArticles, getAllTopics } from "../api";
import { UserProvider } from "./components/UserProvider";
import TopicList from "./components/TopicList";

function App() {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topics, setTopics] = useState();

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

  useEffect(() => {
    getAllTopics()
      .then((data) => {
        setTopics(data.data);

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
      <UserProvider>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<><Homepage /> </>} />
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
          <Route
            path="/users"
            element={
              <>
                <UserManager />
              </>
            }
          />
          <Route
            path="/topics"
            element={
              <>
                <TopicList topics={topics} />
              </>
            }
          />
        </Routes>
      </UserProvider>
    );
  }
}

export default App;
