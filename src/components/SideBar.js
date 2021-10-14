import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns, faHeart, faMusic } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
function SideBar() {
  let { path } = useRouteMatch();
  return (
    <div className="sidenav">
      <Link className="fw-bold" to={path}> <FontAwesomeIcon icon={faMusic} size="lg" />{` Music`} </Link>
      <div className="d-flex flex-column justify-content-evenly align-items-baseline gap-3 mt-2">
        <Link style={{ fontSize: "1rem" }} to={`${path}/albums`}> <FontAwesomeIcon icon={faColumns} /> {` 瀏覽`} </Link>
        <Link style={{ fontSize: "1rem" }} to={`${path}/myFavorites`}> <FontAwesomeIcon icon={faHeart} />{` 我的收藏`} </Link>
      </div>
      <hr />
    </div>
  );
}

export default SideBar;
