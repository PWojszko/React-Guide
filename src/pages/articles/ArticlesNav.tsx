import { Link } from "react-router-dom";

const ArticlesNav = () => {
  return (
    <ul>
      <li>
        <Link to={"/articles/1"}>child-to-parent-callback</Link>
      </li>
    </ul>
  );
};

export default ArticlesNav;
