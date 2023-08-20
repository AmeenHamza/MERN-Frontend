import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './style.css'

function UpdateUser() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="white" onClick={handleShow}>
        Update User
      </Button>

      <Modal show={show} onHide={handleClose} centered>

        <Modal.Body className='d-flex align-items-center justify-content-center'>
          <form className="form">
            <p className="title">Update User </p>
            <p className="message">Update User now and get full access to our app. </p>
            <div className="flex">
              <label className='w-100'>
                <input required="" placeholder="" type="text" className="input" />
                <span>id</span>
              </label>
              <label className='w-100'>
                <input required="" placeholder="" type="text" className="input" />
                <span>Name</span>
              </label>
            </div>
            <label>
              <input required="" placeholder="" type="email" className="input" />
              <span>Email</span>
            </label>
            <label>
              <input required="" placeholder="" type="password" className="input" />
              <span>Password</span>
            </label>
            <label>
              <input required="" placeholder="" type="file" className='my-3' style={{
                backgroundColor: 'black',
                color: '#fff'
              }} />
              <span className='text-success'>Choose Profile Photo</span>
            </label>
            <button className="submit">Update User</button>
          </form>

        </Modal.Body>

      </Modal>
    </>
  );
}

export default UpdateUser;