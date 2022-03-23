import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Form from 'react-bootstrap/Form';

function CreateHotel() {
  const [hotel, setHotel] = useState({
    name: "",
    description: "",
    price: "",
    stars: "",
    city: "",
    country: "",
  });

  const [images, setImages] = useState([]);


  const { name, description, price, stars, city, country } = hotel;


  const navigate = useNavigate();

  const addHotel = async (data) => {
    const response = await axios.post("http://localhost:3001/hotels/add", data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   console.log(!name || !description || !price || !stars || !city || !country)
    const formData = new FormData();
    formData.append('name',name);
    formData.append('description',description);
    formData.append('price',price);
    formData.append('stars',stars);
    formData.append('localisation[city]',city);
    formData.append('localisation[country]',country);
    images.map((image) => formData.append("images", image));

    if (
      !name ||
      !description ||
      !price ||
      !stars ||
      !city ||
      !country ||
      !images
    ) {
      toast.error("All fileds need to  be completed");
      return 0;
    } else {
      addHotel(formData);
      navigate('/hotel/show')
    }
  };
  const handelInputChange = (e) => {
    let { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handelImages = (e) => {
    const uploadImages = Array.from(e.target.files);
    setImages(() => uploadImages);
  };
  console.log(hotel);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <h1> Create Hotel </h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name ..."
          onChange={handelInputChange}
          value={name}
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Enter description ..."
          onChange={handelInputChange}
          value={description}
        />

        <label htmlFor="price">price</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Enter price ..."
          onChange={handelInputChange}
          value={price}
        />

        <label htmlFor="stars">stars</label>
        <input
          type="text"
          id="stars"
          name="stars"
          placeholder="Enter stars ..."
          onChange={handelInputChange}
          value={stars}
        />

        <label htmlFor="city">city</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Enter city ..."
          onChange={handelInputChange}
        />

        <label htmlFor="country">country</label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="Enter country ..."
          onChange={handelInputChange}
        />

        <label htmlFor="images">Select files:</label>
        <input
          type="file"
          id="images"
          name="images"
          multiple
          onChange={handelImages}
        />

        <input type="submit" value="add" /> */}
        <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label htmlFor="name">Name</Form.Label>
    <Form.Control type="text"
          id="name"
          name="name"
          placeholder="Enter Name ..."
          onChange={handelInputChange}
          value={name} />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicDescription">
    <Form.Label htmlFor="description">description</Form.Label>
    <Form.Control type="text"
          id="description"
          name="description"
          placeholder="Enter description ..."
          onChange={handelInputChange}
          value={description} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPrice">
    <Form.Label htmlFor="price">price</Form.Label>
    <Form.Control 
          type="text"
          id="price"
          name="price"
          placeholder="Enter price ..."
          onChange={handelInputChange}
          value={price} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicStars">
    <Form.Label htmlFor="stars">stars</Form.Label>
    <Form.Control 
          type="text"
          id="stars"
          name="stars"
          placeholder="Enter stars ..."
          onChange={handelInputChange}
          value={stars} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Label htmlFor="city">city</Form.Label>
    <Form.Control 
          type="text"
          id="city"
          name="city"
          placeholder="Enter city ..."
          onChange={handelInputChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCountry">
    <Form.Label htmlFor="country">country</Form.Label>
    <Form.Control 
          type="text"
          id="country"
          name="country"
          placeholder="Enter country ..."
          onChange={handelInputChange}
        />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicImages">
    <Form.Label htmlFor="images">images</Form.Label>
    <Form.Control 
          type="file"
          id="images"
          name="images"
          multiple
          onChange={handelImages}
        />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAdd">
    <Form.Label htmlFor="add">Submit</Form.Label>
    <Form.Control 
          type="submit" variant="primary" value="add" />
  </Form.Group>
  
  
      </form>

      {/* <p>{sa}</p> */}
    </div>
  );
}

export default CreateHotel;
