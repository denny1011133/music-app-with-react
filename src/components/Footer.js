import { Navbar, Container } from "react-bootstrap";

function Footer() {
  return (
    <Navbar className="footer" fixed="bottom">
      <Container>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          收聽數百萬的歌曲與 Podcast，而且無需使用信用卡。
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
