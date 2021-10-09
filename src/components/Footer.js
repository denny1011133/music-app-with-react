import { Navbar, Container, Button } from "react-bootstrap";

function Footer() {
  return (
    <Navbar className="footer" fixed="bottom">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          註冊就能無限暢聽歌曲和 Podcast，偶爾穿插些廣告。無需信用卡。
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="light">免費註冊</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
