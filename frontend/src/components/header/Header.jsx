import React from 'react'
import "./header.css"
import {RiHotelBedFill} from "react-icons/ri";

const Header = () => {
  return (
    <header>
        <div className="headerList">
            <div className="headerListItem">
            <RiHotelBedFill size={30}/>
            </div>
        </div>
    </header>
  )
}

export default Header