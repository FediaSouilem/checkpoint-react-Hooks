import React from 'react'
import { useState} from "react";
import "./add.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';

    function AddModal({addMovie}) {
      const [input, setInput]=useState({
    title:'',
    description:'',
    rating:'',
     posterURL:'',
    })
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const onSubmitHandler=(e)=>{
        e.preventDefault()
        addMovie(input)
        setInput({title:"",
       description:"",
        rating:"",
        posterURL:""

      })
       }
      const inputHandler =(e) =>{
        setInput({...input,[e.target.id]:e.target.value})
       }
    
      return (
        <div className='btnadd'> 
        <>
          <Button  variant="primary" onClick={handleShow}>
            Add a movie
          </Button>
    
          <Modal show={show} onHide={handleClose}>
          <div className='input'>
         <form onSubmit={onSubmitHandler}> 
         <form> 
                  <input type='text' id= "title" placeholder='Enter title' value={input.title} onChange={inputHandler}></input>  <br></br> <br></br>
        </form>
        
         <input type='text' id= "description" placeholder='Enter description'value={input.description} onChange={inputHandler}></input> <br></br> <br></br>
         <input type='text' id= "rating" placeholder='Enter rating'value={input.rating} onChange={inputHandler}></input> <br></br> <br></br>
        <input type='text' id= "posterURL" placeholder='Enter posterURL'value={input.posterURL} onChange={inputHandler}></input> <br></br> <br></br>
       
       
         <button className="btnmovie" onClick={()=>setShow(false)}> Add a movie </button>   
         <button type='reset'onClick={()=>setShow(false)}>Reset</button>
        
         </form>
       </div>
          </Modal>
        </>
        </div>
      );
    }
export default AddModal;



