import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar (){
      return (
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">Vinyl Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Contact us</Nav.Link>
                    <NavDropdown title="Albums" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">New</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Best Sellers
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Editor's Pick</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Coming Up
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
        
        export default NavBar;
    