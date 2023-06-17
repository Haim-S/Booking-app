import React from 'react'
import "./header.css"
import {RiHotelBedFill} from "react-icons/ri";
import {IoIosAirplane} from "react-icons/io";
import {AiFillCar} from "react-icons/ai";
import {FaTaxi} from "react-icons/fa";

const Header = () => {

  const iconSize = 25;

  return (
    <header>
      <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
            <RiHotelBedFill size={iconSize}/>
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <IoIosAirplane size={iconSize}/>
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <AiFillCar size={iconSize}/>
            <span>Car rentals</span>
            </div>
            <div className="headerListItem">
            <RiHotelBedFill size={iconSize}/>
            <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FaTaxi size={iconSize}/>
            <span>Airport taxis</span>
            </div>
        </div>
        <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
        <p className='headerDesc'> more with a free lamabooking account</p>
        <button className='headerbtn'>sign in/ Register</button>
      </div>
    </header>
  )
}

export default Header