import React from 'react'
 import ReactStars from "react-star-rating-component";
import { useState, useEffect } from "react";
import { Movieslist } from './Movieslist';
import "./filter.css";


export const Filter = ({setSearch,setRate}) => {
  
  return (
    <div className='col' >
      
      <ReactStars starCount={10}  onStarClick={setRate}/> 
     

      <input 
      className='search' 
      onChange={(event) => setSearch(event.target.value)}
      placeholder='Type to search...'
      ></input>
      <button className="searchbtn" type="submit" >Search</button>
    </div>
  )
}