import React from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';
import UserProgressContext from '../store/UserProgressContext';

function Header() {

  const carCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = carCtx.items.reduce((totalNumberOfItems, item)=>{
    return totalNumberOfItems + item.quantity;
  },0);

  function handleShowCart(){
    userProgressCtx.showCart();
  }

  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logo} alt='App Logo'></img>
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
        </nav>
    </header>
  )
}

export default Header