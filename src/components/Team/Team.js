import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Team.css'

const Team = (props) => {
    const  [team, setTeam] = useState([]);
    useEffect(() =>{
        fetch('http://www.json-generator.com/api/json/get/cppyonIACW?indent=2')
        .then(res => res.json())
        .then(data => setTeam(data))
    },[])
    const [cart, setCart] = useState([]);
   const handleCart =(players) =>{
    const newCart = [...cart, players];
    setCart(newCart);
   }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                {
                    team.map(t => <Player 
                        players = {t}
                        handleCart ={handleCart}
                        ></Player> )
                }

                </div>

                <div className="col-md-3 cart-custom">
                    <h3 className="text-center text-white bg-warning mt-3 rounded">Your Team</h3>
                    <Cart cart = {cart}></Cart>
                    
                </div>
            </div>
        </div>
    );
};

export default Team;