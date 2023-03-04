import React from "react";

const Carousel = () => {
    return (
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="..." class="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block" alt="..." />
                </div>
            </div>
        </div>
        </>
    );
    };

export default Carousel;
   // style={{width: "200px", background: "blue" minHeight:"500px"}}