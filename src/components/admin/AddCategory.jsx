import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './style.css'
import axios from 'axios';

function AddCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setName] = useState("")
  const [categoryImage, setImage] = useState("")
  const [message, setMessage] = useState("")

  const setCategoyName = (e) => {
    setName(e.target.value)
  } 

  const setCategoyImage = (e) => {
    setImage(e.target.value)
  } 

  const addcategory = () => {

    const payload = {
      Name : categoryName,
      Image : categoryImage
    }
  
          axios.post('http://localhost:5000/api/category/createCategory', payload)
          .then((json) => (json.data.message))
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
            <p className="title text-success">Category {message}</p>
            <p className="message">Add Category. </p>
            <div className="flex">
              <label className='w-100'>
                <input required="" placeholder="" type="text" onChange={setCategoyImage} className="input" />
                <span>Category Name</span>
              </label>
            </div>
            <label>
              <input required="" placeholder="" type="text" onChange={setCategoyName} className='my-3' style={{
                backgroundColor: 'black',
                color: '#fff'
              }} />
              <span className='text-success'>Choose Category Photo</span>
            </label>
            <button className="submit" onClick={addcategory}>Add Category</button>
          </form>

        </Modal.Body>

      </Modal>
    </>
  );
}

export default AddCategory;