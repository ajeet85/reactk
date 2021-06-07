import React from 'react';
import TopSlider from "./pages/TopSlider";
import Event from "./pages/Event";
import Tops from "./pages/Tops";
import Testimonial from "./pages/Testimonial";
 const Landing = () => {
    return (
        <div className="body">
            <TopSlider />
            <div className="container">
                <Event />
                <Tops />
                <Testimonial />
            </div>
        </div>
    )
}
export default Landing;