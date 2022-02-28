import React from 'react'
import { Moviescard } from './Moviescard'
import "./movieslist.css";

export const Movieslist = (props) => {
  return (
    <div className='Movieslist'>
      {props.movies.map((movie,index)=> <Moviescard movie={movie} />)}
    </div>
  )
}
