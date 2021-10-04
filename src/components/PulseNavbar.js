import { Navbar, Container, Nav } from 'react-bootstrap'

const PulseNavbar = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">NEAR</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Awesome Near</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default PulseNavbar