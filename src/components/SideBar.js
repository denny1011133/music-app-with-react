import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns, faHeart, faMusic } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import styled from "styled-components";

function SideBar() {
  return (
    <div className="sidenav">
      <a href="/" className="fw-bold">
        <FontAwesomeIcon icon={faMusic} size="lg" />
        {` Music`}
      </a>
      <div className="d-flex flex-column justify-content-evenly align-items-baseline gap-3 mt-2">
        <Button href="/" variant="black"></Button>
        <Button href="/albums" variant="black" style={{ fontSize: "1rem" }}>
          <FontAwesomeIcon icon={faColumns} /> 瀏覽
        </Button>
        <Button
          href="/myFavorites"
          variant="black"
          style={{ fontSize: "1rem" }}
        >
          <FontAwesomeIcon icon={faHeart} /> 我的收藏
        </Button>
      </div>
      <hr />
    </div>
  );
}

export default SideBar;
