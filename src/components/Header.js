import { Navbar, Nav, FormControl, Form, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header({ handleSearch }) {
    return <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="../logo.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                React Bootstrap<FontAwesomeIcon icon="search" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <Nav.Link href="#" disabled>
                        Link
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="搜尋想聽的音樂"
                        className="mr-2"
                        aria-label="Search"
                        onInput={handleSearch}
                    />

                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}


export default Header