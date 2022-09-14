import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

function NavBar (){
      return (
            <Navbar bg="light" expand="lg">
              <Container>
              
                <Navbar.Brand componentClass={Link} href="/" to="/">Vinyl Store</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link componentClass={Link} href="/" to="/">Home</Nav.Link>
                    <Nav.Link href="#link">Contact us</Nav.Link>
                    <NavDropdown title="Albums" id="basic-nav-dropdown">
                      <NavDropdown.Item componentClass={Link} href="/category/new" to="/category/new">New</NavDropdown.Item>
                      <NavDropdown.Item componentClass={Link} href="/category/bestsellers" to="/category/bestsellers"> Best Sellers</NavDropdown.Item>
                      <NavDropdown.Item componentClass={Link} href="/category/editorspick" to="/category/editorspick">Editor's Pick</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item componentClass={Link} href="/category/comingup" to="/category/comingup">Coming Up</NavDropdown.Item>
                    </NavDropdown>
                    <CartWidget />
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
        
        export default NavBar;
    