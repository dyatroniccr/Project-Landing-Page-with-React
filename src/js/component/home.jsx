import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Import other components
import NavBar from "./navbar.jsx";
import Carousel from "./carousel.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		/*<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>*/
		<>
		<NavBar/>
		
		<div class="container text-center">
			<div class="row">
				<div class="col"> 
				    <Card
					    habraboton=""
					/> 
				</div>
				<div class="col"> 
				    <Card/> 
				</div>
				<div class="col"> 
				    <Card/> 
				</div>
				<div class="col"> 
				    <Card/> 
				</div>
			</div>
        </div>  
	
		</>
	);
};

export default Home;
