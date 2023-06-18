import "./featured.css"
import React from 'react'


const Featured = () => {

  const ItemValues = [
    {imgsrc: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=", textOne: "Dublin", textTwo: "123 properties"},
    {imgsrc: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=", textOne: "Reno", textTwo: "533 properties"},
    {imgsrc: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=", textOne: "Austin", textTwo: "532 properties"}
  ]

  return (
    <div className="featured">
      {ItemValues.map((item, i)=> {
        return(
      <div className="featuredItem">
        <img src={item.imgsrc} alt="" className="featureImg" />
        <div className="featuredTitles">
          <h1>{item.textOne}</h1>
          <h2>{item.textTwo}</h2>
        </div>
      </div>
        )
      })}
    </div>
  )
}

export default Featured