import { Link } from "react-router-dom";

function HomePage() {
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
      <h1>午安，奕德。</h1>
      <Link to="/albums"> 前往瀏覽音樂庫</Link>

    </div>
  );
}

export default HomePage;
