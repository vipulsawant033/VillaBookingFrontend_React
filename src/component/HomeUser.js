import React from "react";
import Carousel from "./carousel";
import { NavbarUser } from "./navbar";
// import Calendar from "./datesBooking";


export const HomeUser = () => {
    return (
        <>
        <NavbarUser />
            <div className="bg">
                <img src="slide1.jpg" alt="..." style={{width:"100vw", height:"90.8vh"}}/>
            </div> 
    
                <Carousel>

                </Carousel>


            </>
            )
}