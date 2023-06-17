import React from 'react'
import "./header.css"
import {RiHotelBedFill} from "react-icons/ri";
import {IoIosAirplane} from "react-icons/io";
import {AiFillCar} from "react-icons/ai";
import {FaTaxi} from "react-icons/fa";

const Header = () => {
  const iconSize = 25;

  const headerPlaceholder = [
    {value: "Stays", icon: "HotelBed"},
    {value: "Flights", icon:  "Airplane"},
    {value: "Car rentals", icon: "FillCar" },
    {value: "Attractions", icon: "HotelBed"},
    {value: "Airport taxis", icon: "Taxi"},
  
  ]


  return (
    <header>
      <div className="headerContainer">
        <div className="headerList">
          {headerPlaceholder.map((val, i)=>{
            return(
            <div className="headerListItem active">
            {val.icon === "HotelBed" &&  <RiHotelBedFill size={iconSize}/>}
            {val.icon === "Airplane" &&  <IoIosAirplane      size={iconSize}/>}
            {val.icon === "FillCar" &&  <AiFillCar      size={iconSize}/>}
            {val.icon === "HotelBed" &&   <RiHotelBedFill size={iconSize}/>}
            {val.icon === "Taxi" &&  <FaTaxi        size={iconSize}/>}
            <span>{val.value}</span>
            </div>
            )
          })}
        </div>
        <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
        <p className='headerDesc'> more with a free lamabooking account</p>
        <button className='headerbtn'>sign in/ Register</button>
        <div className="headerSearch">
        <RiHotelBedFill size={iconSize}/>
        <input 
        type="text" 
        placeholder="Where are you going?"
        className='headerSearchInput'
        />
        </div>
      </div>
    </header>
  )
}

export default Header