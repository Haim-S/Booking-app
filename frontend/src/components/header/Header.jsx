import React from 'react'
import "./header.css"
import {RiHotelBedFill} from "react-icons/ri";
import {IoIosAirplane} from "react-icons/io";
import {AiFillCar} from "react-icons/ai";
import {FaTaxi} from "react-icons/fa";

const Header = () => {
  return (
    <header>
        <div className="headerList">
            <div className="headerListItem">
            <RiHotelBedFill size={30}/>
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <IoIosAirplane size={30}/>
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <AiFillCar size={30}/>
            <span>Car rentals</span>
            </div>
            <div className="headerListItem">
            <RiHotelBedFill size={30}/>
            <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FaTaxi size={30}/>
            <span>Airport taxis</span>
            </div>
        </div>
    </header>
  )
}

export default Header