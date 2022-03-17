import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function ShowHotel() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    getHotel();
  },[]) 
  
  const getHotel =  async()=>{
      const response = await axios.get("http://localhost:3001/hotels/");
      if (response.status===200){
          setData(response.data.data);
          console.log(response.data.data)
      }
  };

  console.log("data=>",data);
  
  return (
    <div>
        <h1>Show Hotel</h1>
        <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>description</th>
                <th>Price</th>
                <th>stars</th>
                <th>city</th>
                <th>country</th>
                <th>images</th>
            </tr>
        </thead>
        <tbody>
            {data && data.map((item, index) => { 
                return(
                    <tr key = {index}>
                        <th>{index + 1}</th> 
                        <td>{item.name}</td>   
                        <td>{item.description}</td>   
                        <td>{item.price}</td>   
                        <td>{item.stars}</td>   
                        <td>{item.localisation.city}</td>   
                        <td>{item.localisation.country}</td>   
                        <td>{item.images}</td>  
                        <td>
                            {/* <link to={`/update/${item.id}`}>
                                <button>Edit</button>    
                            </link>
                            <button>Delete</button>
                            <link to={`/view/${item.id}`}>
                                <button>View</button>
                            </link> */}
                        </td> 
                    </tr>
                );
            })}
        </tbody>
        </table>
    </div>
  );
}

export default ShowHotel;

