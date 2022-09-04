import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {TbShoppingCart} from 'react-icons/tb';

export default function CartWidget (){
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <TbShoppingCart/>
          {' '}
            </Navbar.Brand>
        </Container>
      </Navbar>
    )
}