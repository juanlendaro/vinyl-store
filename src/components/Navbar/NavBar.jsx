import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { LinkContainer } from 'react-router-bootstrap';
function NavBar (){
      return (
            <Navbar bg="light" expand="lg">
              <Container>
              <LinkContainer to="/">
                <Navbar.Brand href="#home">Vinyl Store</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                    <Nav.Link href="#link">Contact us</Nav.Link>
                    <NavDropdown title="Albums" id="basic-nav-dropdown">
                    <LinkContainer to="/category/new">
                      <NavDropdown.Item >New</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/category/bestsellers">
                      <NavDropdown.Item>
                        Best Sellers
                      </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/category/editorspick">
                      <NavDropdown.Item>Editor's Pick</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <LinkContainer to="/category/upcoming">
                      <NavDropdown.Item>
                        Coming Up
                      </NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                    <CartWidget />
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
        
        export default NavBar;
    