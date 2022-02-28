import './App.css';
import React, {useState} from 'react';
import { Movieslist } from './Movieslist';
import { Filter } from './Filter';
import Add  from './Add';

function App() {
  const [movies, setMovies] = useState([
 {title:"Harry Potter 20th Anniversary: Return To Hogwarts",description:"The retrospective special brings together Daniel Radcliffe, Emma Watson, Rupert Grint and many more in celebration of the franchise that first hit theaters in 2001." , posterURL:"https://movieplayer.net-cdn.it/t/images/2021/12/15/fgryjiix0ak677f_jpg_960x0_crop_q85.jpg",rating:8},
 {title:"The Retirement Plan",description:"he Retirement Plan will be a crime-thriller primarily set in Cayman Islands, where the film will go under production shortly. ",posterURL:"https://img.reelgood.com/content/movie/10c4daf6-225f-4fbe-b0bb-9a9388fb03b5/poster-780.jpg",
 rating:9},
 {title:"The 355",description:"When a top-secret weapon falls into mercenary hands, wild card CIA agent Mason Mace Brown will need to join forces with rival badass German agent Marie, former MI6 ally and cutting-edge computer specialist Khadijah.",posterURL:"https://hiddenremote.com/files/2022/01/the-355-355_Adv1Sht2_RGB_1_rgb-850x560.jpg",
 rating:6},
 {title:"Belle",description:"The film chronicles the life of Suzu, a lonely teenager without a mother in real life who, once in the ultra-connected virtual world." ,posterURL:"https://dx35vtwkllhj9.cloudfront.net/gkidsfilms/belle/images/regions/us/header.jpg",
 rating:8},
 {title: "Jackass Forever",description:"After 11 years, the Jackass crew is back for their final crusade. After 11 years, the Jackass crew is back for their final crusade.",posterURL:"https://dx35vtwkllhj9.cloudfront.net/paramountpictures/jackass-forever/images/gallery/Toilet.jpg",
 rating:7},
 {title:"Hotel Transylvania: Transformania",description:"Dracula and Johnny, who transformed into a human and monster, must find the way to South America to revert back, before their transformations become permanent.",posterURL:"https://www.themoviedb.org/t/p/original/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg",
 rating:9},
 {title:"Ray Donovan: The Movie",description:"In a movie spinoff from the series, Ray determined to find and stop Mickey before he can cause any more carnage.",posterURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6CAhlk-GXL3bVFs_O_G8hbhIK6wICe_DNA&usqp=CAU",rating:8},
 {title:"The Black Phone",description:"he film received generally positive reviews from critics, with praise for its faithfulness to the source material, Derrickson's direction, and Hawke's performance as the antagonist.",posterURL:"https://i.ytimg.com/vi/3eGP6im8AZA/maxresdefault.jpg",rating:6},
 {title:"Miss Willoughby And The Haunted Bookshop",description:"A University professor with an insatiable appetite for investigation is asked by some old family friends to investigate a series of hauntings at their antique bookstore.",
 posterURL:"https://mytvonline.io/wp-content/uploads/2022/02/Miss-Willoughby.jpg",rating:7}
    
  ]);
  const [search, setSearch] = useState("")
  const [rate,setRate] = useState(0);
  const [input, setInput] = useState("");
  const [modalShow, setModalShow] = useState(false);
const addMovie = (data) => { 
  setMovies([...movies,data])
  
 }
  
 
  return (
    <div className="container">
    <Filter setSearch={setSearch} setRate={setRate} />
     <Add setModalShow={setModalShow} addMovie={addMovie}/>
     <Movieslist movies={movies.filter(mv =>
      mv.title.toLowerCase().includes(search.toLowerCase()) && (mv.rating >= rate))}/>
    
    </div>

  );
}

export default App;
