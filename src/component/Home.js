import React from "react";
import CarouselUser from "./carouselUser";
import Nav from "./navbar";
// import Calendar from "./datesBooking";


export const Home = () => {
    return (
        <>
        <Nav />
            <div className="bg">
                <img src="slide1.jpg" alt="..." style={{width:"100vw", height:"90.8vh"}}/>
            </div> 
    
                <CarouselUser>

                </CarouselUser>


            </>
            )
}