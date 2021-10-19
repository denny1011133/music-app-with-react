import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

function HomePage({ username }) {
  let { path } = useRouteMatch();

  return (
    <div
      style={{
        marginLeft: "224.8px",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 >您好，{username}</h1>
      <Link to={`${path}/albums`}>前往瀏覽音樂庫</Link>

    </div>
  );
}

export default HomePage;
