import { Navbar, Container } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";

function Footer() {
  let { path } = useRouteMatch();

  return (
    <Navbar className="footer" fixed="bottom">
      <Container>
        <Navbar.Brand href={path} style={{ color: "white" }}>
          收聽數百萬的歌曲與 Podcast，而且無需使用信用卡。
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
