import { useParams } from "react-router";
import { Link } from "react-router-dom";

import ChildToParentCallback from "./child-to-parent-callback";

function Article() {
  const params = useParams();
  const { articleId } = params;

  const articlePageContent = (component: JSX.Element) => {
    return (
      <div>
        <Link to={"/articles"}>Go back</Link>
        {component}
      </div>
    );
  };

  switch (articleId) {
    case "0":
      return articlePageContent(<ChildToParentCallback />);

    default:
      return articlePageContent(<h1>No article found</h1>);
  }
}

export default Article;
