import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ArticlesNav = () => {
  const articlesById = [
    { id: "0", name: "Child to parent callback" },
    { id: "1", name: "Lorem ipsum" },
    { id: "2", name: "Lorem ipsum" },
    { id: "3", name: "Lorem ipsum" },
  ];

  const articlesMap = articlesById.map((article) => {
    return (
      <li key={article.id}>
        <Link to={article.id}>{article.name}</Link>
      </li>
    );
  });

  return <ul>{articlesMap}</ul>;
};

export default ArticlesNav;
