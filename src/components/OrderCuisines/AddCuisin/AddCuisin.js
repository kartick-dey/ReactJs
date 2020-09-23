import React from 'react';
import './AddCuisin.css';
import {Container, Row, Col} from 'react-bootstrap';
import restaurentFoodImg from "../../../assets/images/restaurentFood1.jpeg";

const addCuisin = (props) => (
  <div className="AddCuisin">
    <div className="FoodList">
      <Container className="AddCuisinContainer">
        <Row>
          <Col sm={2} className="CuisinImage"><img src={restaurentFoodImg} alt="Restaurent_food_image" /></Col>
          <Col sm={8}>
            <Row>
              <Col sm={5}>
                <div>
                  <p>Cuisin's Name</p>
                  <p>Rs: <strong>90</strong></p>
                </div>
              </Col>
              <Col sm={7} className="AddRemoveItems">
              <div><span></span></div>
              <div>
                <button className='Add'>Add</button>
                <button className='Remove'>Remove</button>
              </div>

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default addCuisin;
