/****************************
* File Name: AddBrand.jsx 	*
* Author: Ameen Hamza       *
* Output: Add Brand Modal   *
****************************/

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
// import { storage } from "../../utils/firebaseConfig";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import UpdateBrand from "./UpdateBrand";

import './style.css'

function AddBrand() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [brandName, setName] = useState("")
  const [brandImage, setImage] = useState("")
  const [message, setMessage] = useState("")

  const setBrandName = (e) => {
    setName(e.target.value)
  } 

  const setBrandImage = (e) => {
    setImage(e.target.value)
  } 

  const addBrand = () => {

  const payload = {
    name : brandName,
    image : brandImage
  }

        axios.post('http://localhost:5000/api/brand/createBrand', payload)
        .then((json) => setMessage(json.data.message))
        .catch((err) => console.log(err))
}
  return (
    <>
      <Button variant="white" onClick={handleShow}>
        Add Category
      </Button>

      <Modal show={show} onHide={handleClose} centered>

        <Modal.Body className='d-flex align-items-center justify-content-center'>
          <form className="form">
            <p className="title">Category {message}</p>
            <p className="message">Add Category. </p>
            <div className="flex">
              <label className='w-100'>
                <input required="" placeholder="" type="text" onChange={setBrandName} className="input" />
                <span>Brand Name</span>
              </label>
            </div>
            <label>
              <input required={true} placeholder="Enter image url" type="text" onChange={setBrandImage} className='my-3' style={{
                backgroundColor: 'black',
                color: '#fff'
              }} />
              <span className='text-success'>Choose Category Photo</span>
            </label>
            <button className="submit" onClick={addBrand}>Add Category</button>
          </form>

        </Modal.Body>

      </Modal>
    </>
  );
}

export default AddBrand;

