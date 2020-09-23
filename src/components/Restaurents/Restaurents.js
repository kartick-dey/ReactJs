import React, { Component } from 'react';
import Restaurent from './Restaurent/Restaurent';
import FoodImg1 from "../../assets/images/food.jpg";
import FoodImg2 from "../../assets/images/food1.jpg";
import FoodImg3 from "../../assets/images/food2.jpg";
import FoodImg4 from "../../assets/images/food3.jpg";
class Restaurents extends Component {
	orderNowHandler = () => {
		this.props.history.push("/order");
	}
	render() {
		return (
			<div style={{width: "100%"}}>
				<div className="Restaurents">
					<div>
						<Restaurent
						restaurentName={"Dominos Pizza"}
						restaurentLocality={"Dum Dum"}
						restaurentAddress={"Ground Floor, Sree Bhavan Holding 185, Mouza Birati District, Dum Dum, Kolkata"}
						openingTime={"11am – 1am (Today)"}
						cuisines={" Chinese, Asian, Seafood, Cantonese"}
						rating={4}
						img={FoodImg1}
						clicked={this.orderNowHandler}/>
						<Restaurent
						restaurentName={"Chowman"}
						restaurentLocality={"Camac Street Area"}
						restaurentAddress={"3, Ho Chi Minh Sarani, Little Rusell Street Post Office, Camac Street Area, Kolkata"}
						openingTime={"12noon – 10:30pm (Today)"}
						cuisines={" Chinese, Asian, Seafood, Cantonese"}
						rating={4.3} img={FoodImg2}
						clicked={this.orderNowHandler}/>
						<Restaurent
						restaurentName={"Arsalan"}
						restaurentLocality={"Chinar Park"}
						restaurentAddress={"AS/404, Twenty Four Parganas, Bidhannagar North, Atghara, Chinar Park, Kolkata"}
						openingTime={"11am – 11:45pm (Today)"}
						cuisines={"Mughlai, North Indian, Rolls, Biryani"}
						rating={4.1}
						img={FoodImg3}
						clicked={this.orderNowHandler}/>
						<Restaurent
						restaurentName={"JW Kitchen - JW Marriott Hotel"}
						restaurentLocality={"Science City Area"}
						restaurentAddress={"JW Marriott Hotel, 4A, J.B.S Haldane Avenue, Science City Area, Kolkata"}
						openingTime={"24 Hours (Today)"}
						cuisines={" North Indian, European, Mediterranean, Thai, Salad, Juices"}
						rating={4.9} img={FoodImg4}
						clicked={this.orderNowHandler}/>
					</div>
				</div>
			</div>
		);
	}

}

export default Restaurents;
