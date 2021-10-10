import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faColumns, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function SideBar() {
  return (
    <div className="sidenav px-2">
      <a href="/" className="fw-bold">
        <FontAwesomeIcon icon={faSpotify} size="lg" />
        Spotify
      </a>

      <div className="d-flex flex-column justify-content-evenly align-items-baseline gap-3 mt-2">
        <Button
          href="/"
          variant="black"
          style={{ fontSize: "1rem", color: "rgb(179,179,179)" }}
        ></Button>
        <Button
          href="/albums"
          variant="black"
          style={{ fontSize: "1rem", color: "rgb(179,179,179)" }}
        >
          <FontAwesomeIcon icon={faColumns} /> 瀏覽
        </Button>
        <Button
          href="/myFavorites"
          variant="black"
          style={{ fontSize: "1rem", color: "rgb(179,179,179)" }}
        >
          <FontAwesomeIcon icon={faHeart} /> 我的收藏
        </Button>
      </div>
      <hr />
    </div>
  );
}

export default SideBar;
