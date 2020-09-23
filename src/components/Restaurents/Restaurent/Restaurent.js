import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Restaurent.css';


const restaurent = (props) => {
	return (
		<Container className="ContainerDiv">
				<Row className="RowDiv">
					<Col sm={4} className="Image"><img src={props.img} alt="Biriyani" /></Col>
					<Col sm={4}>
						<div className="Restaurent">
							<label className="RestaurentName">{props.restaurentName}</label>
							<p className="RestaurentLocality">{props.restaurentLocality}</p>
							<span className="RestaurentAddress">{props.restaurentAddress}</span>
							<div className="Rating">
								<label>{props.rating}</label>
								{/*{ratingStars}*/}
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>

							</div>
						</div>

					</Col>
				</Row>
				<Row className="RowDiv">
					<Col sm={8}>
						<table className="RowTable">
						<tbody>
              <tr>
  							<td className="Cell">Cuisines:</td>
  							<td>{props.cuisines}</td>
  						</tr>
  						<tr>
  							<td>Open: </td>
  							<td>{props.openingTime}</td>
  						</tr>
            </tbody>
					</table>
					</Col>
				</Row>
				<Row>
					<div className="OrderButtonDiv"><button onClick={props.clicked} className="OrderButton">Order Now</button></div>
				</Row>
		</Container>
	);
}

export default restaurent;
