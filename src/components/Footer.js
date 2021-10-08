import { Navbar, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container>
            <Navbar.Brand href="#home">
            <FontAwesomeIcon icon="check-square" />
                React Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}


export default Footer