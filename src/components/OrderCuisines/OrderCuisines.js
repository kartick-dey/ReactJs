import React from 'react';
import './OrderCuisines.css';
import AddCuisin from './AddCuisin/AddCuisin';
import {Container, Row, Col} from 'react-bootstrap';
import restaurentFoodImg from "../../assets/images/restaurentFood1.jpeg";

const orderCuisines = (props) => {
  return (
    <div>
    <div className="OrderCuisines">
      <div className="RestaurentDetails">
        <div>
          <img src={restaurentFoodImg} alt="Restaurent_food_image" />
        </div>
        <div className="Restaurent">
          <label className="RestaurentName">Domino's Pizza{props.restaurentName}</label>
          <p className="RestaurentLocality">Dum Dum{props.restaurentLocality}</p>
          <span className="RestaurentAddress">3, Ho Chi Minh Sarani, Little Rusell Street Post Office, Camac Street Area, Kolkata{props.restaurentAddress}</span>
          <p>Open : 10am - 11 pm (Mon-Sun)</p>
          <div>
            <label>Rating : {props.rating}</label>
            {/*{ratingStars}*/}
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
        <h3>Order online</h3>
      </div>
      <div className="AddCuisinDiv"><AddCuisin /></div>
    </div>
    <div className="PlaceOrderDivFooter">
      <div>
        <div>
          <Row>
            <Col xs={3} style={{float: "right",marginTop: "10px", marginLeft: "30px"}}><p>Your Order</p></Col>
            <Col xs={4} style={{float: "right",marginTop: "10px"}}><p>Total: 90</p></Col>
            <Col xs={4} style={{float: "right",marginTop: "10px"}}><button className="ContinueOrderButton">Continue</button></Col>
          </Row>
        </div>
      </div>
    </div>
    </div>

  );
};

export default orderCuisines;
