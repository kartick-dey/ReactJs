import React from 'react';
import './PlaceOrder.css';
import {Container, Row, Col} from 'react-bootstrap';
import OrderSummary from './OrderSummary/OrderSummary';
import ContactData from './ContactData/ContactData'

const placeOrder = (props) => (
  <div>
  <h3 style={{textAlign:'center',padding:"10px"}}>Please Fill the Deatils to Place Order</h3>
    <Container className="PlaceOrderContainer">
      <Row>
        <Col>
          <div>
            <ContactData />
          </div>
        </Col>
        <Col>
          <div className="PlaceOrder">
            <OrderSummary />
          </div>
        </Col>
      </Row>
    </Container>
    <div></div>
  </div>
);

export default placeOrder;
