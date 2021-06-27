import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus,faShoppingCart,faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import CartReview from '../CartReview/CartReview';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.salary;
    }
    const handleReview = () => {
        console.log('review');
    }
    return (
        <div>
           <h4> Players Selected:{cart.length}</h4>
           <h5>Total Salary: ${total}</h5>
           {
               cart.map(palyer => <li>
                   <h5 className="text-success">{palyer.name}</h5>
                   <p>Salary: ${palyer.salary}</p>
               </li>)
           }
           <button onClick={handleReview} type="button" class="btn btn-success"><FontAwesomeIcon icon={faCheckSquare} />Review Player</button>
           <CartReview></CartReview>
        </div>

    );
};

export default Cart;