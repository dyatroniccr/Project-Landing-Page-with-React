import React from "react";

//include images into your bundle
import mana2 from "../../img/mana2.jpg";
import sodaStereo from "../../img/soda_stereo.jpg";
import hombresG2 from "../../img/hombresg2.jpg";
import cadillacs2 from "../../img/losfabulosos_cadillacs2.jpg";


const Carousel = () => {
    return (
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                    <img src={mana2} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={cadillacs2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={hombresG2} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button type="button" className="carousel-control-prev"  data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>                
            </button>
            <button type="button" className="carousel-control-next" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>                
            </button>
        </div>
        </>
    );
    };

export default Carousel;
   // style={{width: "200px", background: "blue" minHeight:"500px"}}