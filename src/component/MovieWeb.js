import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import 'antd/dist/antd.css';
import { Col, Divider, Row } from 'antd';
import Card from 'react-bootstrap/Card';
import movielogo1 from "./../assets/movielogo1.png";




const MovieWeb=()=>{
  const [inputfiled, setinputfield] = useState("")
  const [data ,setdata] = useState([]);
  


  const inputChange=(e)=>{
     const data = e.target.value
     setinputfield(data);
  }


  useEffect(()=>{
    searchMovie();
  }, [inputfiled]);
  const btnSearch =()=>{
    searchMovie();
  }

  const searchMovie = () => {
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=8489082e&s=${inputfiled}`).then((response)=>{
      console.log("response data: ", response.data.Search);
      const searchResponse = response.data.Search;
      if(searchResponse !== undefined){
        setdata(searchResponse);
      }
      
    }).catch((error)=>{
       console.log(error);
    })
  }
  return(
    
    <>
      <div class="search">
        <div class="items-header items1-header">
            <img src={movielogo1} id="abc"
                alt="logo image" />
        </div>
        <div class="items-header items2-header">
        <h1 className="titlename">Movie-Verse</h1>
        </div>
        <input type="search"  onChange={inputChange} placeholder="Type movie name here" id="srch"/>
        <button type="button" onKeyDown={searchMovie} onClick={btnSearch} id="intbtn" >SEARCH</button>
      </div>
      <br/>
      <br/>
      {/* <input type="search"  onChange={inputChange} placeholder="search job" id="srch"/> */}
      {/* <div className="heading">
       <h1 className="titlename">Movie-Verse</h1>
       <img  src={movielogo1} className="logo" />
       </div>
       <div className="inptsrc">
       <input type="text" onChange={inputChange}  /> */}
      
       
       <br/>
       <br/>
       
    <Row gutter={[0,0]} wrap className="back">
       {
       data.map((value, index)=>{
        
            return( 
              <Col xs={{ span: 8, offset: 1 }} lg={{ span: 5, offset: 1 }} >
              <div >
             <Card className="flex"  style={{ width: '10rem' }} >
         <Card.Body >
         <Card.Header> {value.Title}</Card.Header>
         <Card.Img   style={{ width: '9rem' }} variant="top" src={value.Poster}  />
         <Card.Footer  className="year"> Year :{value.Year}</Card.Footer >
         </Card.Body>
         </Card>
         </div>
         </Col>
         
      )
            
    })
  } 
   </Row>
    </>
     )
    }
   
export default MovieWeb;