import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import {
  faPlayCircle,
  faColumns,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { Form, Button } from "react-bootstrap";

function SideBar({ handleSearch }) {
  return (
    <div className="sidenav px-2">
      <a href="/" className="fw-bold">
        <FontAwesomeIcon icon={faSpotify} size="lg" />
        Spotify
      </a>
      <Form.Control
        onInput={handleSearch}
        type="text"
        size="sm"
        placeholder="搜尋"
      />
      <div className="d-flex flex-column justify-content-evenly align-items-baseline gap-3 mt-2">
        <Button
          href="/"
          variant="black"
          style={{ "font-size": "1rem", color: "rgb(179,179,179)" }}
        >
          <FontAwesomeIcon icon={faPlayCircle} /> 立即聆聽
        </Button>
        <Button
          href="/albums"
          variant="black"
          style={{ "font-size": "1rem", color: "rgb(179,179,179)" }}
        >
          <FontAwesomeIcon icon={faColumns} /> 瀏覽
        </Button>
        <Button
          href="/myFavorites"
          variant="black"
          style={{ "font-size": "1rem", color: "rgb(179,179,179)" }}
        >
          <FontAwesomeIcon icon={faHeart} /> 我的收藏
        </Button>
      </div>
      <hr />
    </div>
  );
}

export default SideBar;
