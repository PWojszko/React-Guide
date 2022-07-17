import { Routes, Route, Link } from "react-router-dom";

//Pages
import Home from "./pages/home";
import Articles from "./pages/articles";
import Article from "./pages/articles/article";

function App() {
  return (
    <div className="App">
      <Link to={"/"}>
        <h1>Go to home</h1>
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:articleId" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
