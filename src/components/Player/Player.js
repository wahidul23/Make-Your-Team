import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Player.css'
const Player = (props) => {
    const {name, img, country, salary, position } = props.players;
    return (
        <div className ="container">
           <div className="row m-5 border-bottom pb-3">
                <div className="col-md-4 img-custom ">
                    <img className="rounded" src={img} alt="" />
                </div>
                <div className="col-md-6">
                    <h4>Player Name:{name}</h4>
                    <h5>Salary:${salary}</h5>
                    <h6>Country:{country}</h6>
                    <h5>Position:{position}</h5>
                    <button onClick={() => props.handleCart(props.players)} type="button" class="btn btn-primary"><FontAwesomeIcon icon={faUserPlus} />Add Player</button>
                </div>
                
           </div>
        </div>
    );
};

export default Player;