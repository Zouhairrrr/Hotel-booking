import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function ShowHotel() {
  const [data, srtData] = useState([]);

  useEffect(()=>{
    getHotel();
  },[]) 
  
  const getHotel =  async()=>{
      const response = await axios.get("")
  }
  
  return (
    <div>
        <h1>Show Hotel</h1>
    </div>
  )
}

export default ShowHotel;

