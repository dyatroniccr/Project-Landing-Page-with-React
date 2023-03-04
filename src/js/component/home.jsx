import React from "react";

//include images into your bundle
import mana from "../../img/mana_rockgroup.jpg";
import sodaStereo from "../../img/soda_stereo.jpg";
import hombresG from "../../img/hombresg.jpg";
import cadillacs from "../../img/losfabulosos_cadillacs.jpg";

//Import other components
import NavBar from "./navbar.jsx";
import Carousel from "./carousel.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		
		<>
		<NavBar/>
				
		<div class="container text-center">
		    <Carousel/>
			<div class="row d-flex justify-content-center mt-4">
				<div class="col"> 
				    <Card
					    imagen = {mana}		    
					    titulo="Maná"
					    descripcion="Maná es una banda de rock y pop latino de origen mexicano fundada en 1986 en Guadalajara, Jalisco. Actualmente la integran Fher Olvera (guitarra rítmica, armónica y voz líder), Juan Calleros (bajo y contrabajo), Álex González (batería y voz) y Sergio Vallín (guitarra y voz). Ha vendido más de 40 millones de discos en todo el mundo"
					    link="https://es.wikipedia.org/wiki/Man%C3%A1_(banda)"
						habraboton="Find Out More!"
					/> 
				</div>
				<div class="col"> 
				    <Card
					    imagen = {sodaStereo}
					    titulo="Soda Stereo"
					    descripcion="Soda Stereo es una banda argentina del Rock alternativo formada en Buenos Aires en 1982 por Gustavo Cerati (voz y guitarra), Zeta Bosio (bajo) y Charly Alberti (batería). Considerada ampliamente por la crítica especializada como la banda más importante, popular e influyente de rock en español de todos los tiempos y una leyenda de la música latinoamericana."
					    link="https://es.wikipedia.org/wiki/Soda_Stereo"
						habraboton="Find Out More!"
					/> 
				</div>
				<div class="col"> 
				    <Card
					    imagen = {hombresG}
					    titulo="Hombres G"
					    descripcion="Hombres G es una banda musical española de rock and roll y pop rock. Esta banda fue fundada en Madrid en 1983 por su vocalista y bajista David Summers y uno de sus guitarristas, Rafa Gutiérrez, junto con Javier Molina (batería) y Daniel Mezquita (guitarra)."
					    link="https://es.wikipedia.org/wiki/Hombres_G"
						habraboton="Find Out More!"
					/> 
				</div>
				<div class="col"> 
				    <Card
					    imagen = {cadillacs}
					    titulo="Los Fabulosos Cadillacs"
					    descripcion="Los Fabulosos Cadillacs es una banda argentina de ska proveniente de Buenos Aires y fundada en 1984. Llevan grabados 16 álbumes y a lo largo de sus distintas eras colaboraron con distintos artistas argentinos e internacionales, obteniendo en el medio un gran reconocimiento crítico y comercial."
						link="https://es.wikipedia.org/wiki/Los_Fabulosos_Cadillacs"
						habraboton="Find Out More!"
					/> 
				</div>
			</div>
        </div>  
		<Footer/> 
	
		</>
	);
};

export default Home;
