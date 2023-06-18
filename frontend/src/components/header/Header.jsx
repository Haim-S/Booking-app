import React,  {useState} from 'react'
import "./header.css"
import {RiHotelBedFill} from "react-icons/ri";
import {IoIosAirplane} from "react-icons/io";
import {AiFillCar} from "react-icons/ai";
import {FaTaxi} from "react-icons/fa";
import {GiPerson} from "react-icons/gi";
import {LuCalendarDays} from "react-icons/lu";
import { DateRange } from 'react-date-range';
import {format} from "date-fns";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file



const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1, 
    children: 0,
    room: 1,
  })
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate:new Date(),
      key: 'selection'
    }
  ]);

  const iconSize = 25;

  const headerPlaceholder = [
    {value: "Stays", icon: "HotelBed"},
    {value: "Flights", icon:  "Airplane"},
    {value: "Car rentals", icon: "FillCar" },
    {value: "Attractions", icon: "Attractions"},
    {value: "Airport taxis", icon: "Taxi"},
  ]

  const handleOption = (name, operation) => {
    setOptions(prev => {return{
      ...prev, [name]: operation === "i" ? options[name] +1 :  options[name] -1,
    }})
  }


  return (
    <header>
      <div className={type === "List" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          {headerPlaceholder.map((val, i)=>{
            return(
            <div key={i} className="headerListItem active">
            {val.icon === "HotelBed" &&  <RiHotelBedFill size={iconSize}/>}
            {val.icon === "Airplane" &&  <IoIosAirplane      size={iconSize}/>}
            {val.icon === "FillCar" &&  <AiFillCar      size={iconSize}/>}
            {val.icon === "Attractions" &&   <RiHotelBedFill size={iconSize}/>}
            {val.icon === "Taxi" &&  <FaTaxi        size={iconSize}/>}
            <span>{val.value}</span>
            </div>
            )
          })}
        </div>
        
       {type !== "List" &&
        <>
        <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
        <p className='headerDesc'> more with a free ahsbooking account</p>
        <button className='headerbtn'>sign in/ Register</button>
        <div className="headerSearch">
        <div className="headerSearchItem">
        <RiHotelBedFill className='headerIcons' size={iconSize}/>
        <input 
        type="text" 
        placeholder="Where are you going?"
        className='headerSearchInput'
        />
        </div>

        <div className="headerSearchItem">
        <LuCalendarDays className='headerIcons' size={iconSize}/>
        <span onClick={()=> setOpenDate(!openDate)} className='headerSearchText'>
          {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
        </span>
        {openDate &&
        <DateRange
          className='headerDate'
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
        />
      }
        </div>

        <div className="headerSearchItem">
        <GiPerson className='headerIcons' size={iconSize}/>
        <span onClick={()=> setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adults ${options.children} children ${options.room} room`}</span>
        {openOptions &&
        <div className="options">
          <div className="optionItem">
            <span className="optionText">Adult</span>
            <div className="optionCounter">
            <button disabled={options.adult <= 1} className='optionCounterButton'onClick={()=> handleOption("adult", "d")}>-</button>
            <span className='optionCounterNumber'>{options.adult}</span>
            <button className='optionCounterButton' onClick={()=> handleOption("adult", "i")}>+</button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Children</span>
            <div className="optionCounter">
            <button disabled={options.children <= 0} className='optionCounterButton' onClick={()=> handleOption("children", "d")}>-</button>
            <span className='optionCounterNumber'>{options.children}</span>
            <button className='optionCounterButton' onClick={()=> handleOption("children", "i")}>+</button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Room</span>
            <div className="optionCounter">
            <button disabled={options.room <= 1} className='optionCounterButton' onClick={()=> handleOption("room", "d")}>-</button>
            <span className='optionCounterNumber'>{options.room}</span>
            <button className='optionCounterButton' onClick={()=> handleOption("room", "i")}>+</button>
            </div>
          </div>
        </div>
}
        </div>
        </div>
        </>}
      </div>
    </header>
  )
}

export default Header