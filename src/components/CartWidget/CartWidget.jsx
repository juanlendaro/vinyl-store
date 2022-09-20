import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {TbShoppingCart} from 'react-icons/tb';
import { cartContext } from '../CartContext/CartContextComponent';
import { useEffect } from 'react';
import { useContext } from 'react';

export default function CartWidget (){
    const {totalCount} = useContext(cartContext); 
   
    // useEffect(()=>{

    // }, [cart]);
    
  return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
          <TbShoppingCart/>
          {totalCount}
            </Navbar.Brand>
        </Container>
      </Navbar>
    )
}