import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ArticlesNav = () => {
  const articlesById = [
    { id: "0", name: "Child to parent callback" },
    { id: "1", name: "Fetching data" },
    { id: "2", name: "Lorem ipsum" },
    { id: "3", name: "Lorem ipsum" },
  ];

  const articlesMap = articlesById.map((article) => {
    const { id, name } = article;

    return (
      <li key={id}>
        <Link to={id}>{name}</Link>
      </li>
    );
  });

  return <ul>{articlesMap}</ul>;
};

export default ArticlesNav;
