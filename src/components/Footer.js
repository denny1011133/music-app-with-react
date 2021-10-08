import { Navbar, Container, Button } from 'react-bootstrap'

function Footer() {
    return <Navbar className="footer" fixed="bottom">
        <Container>
            <Navbar.Brand href="#home" style={{color:"white"}}>7,500 萬首歌曲，免費暢聽 3 個月。</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Button variant="light">免費試用</Button>{' '}
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}


export default Footer