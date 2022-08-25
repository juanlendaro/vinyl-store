import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {BsVinylFill} from 'react-icons/bs';

export default function CartWidget (){
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <BsVinylFill />
          {' '}
            </Navbar.Brand>
        </Container>
      </Navbar>
    )
}