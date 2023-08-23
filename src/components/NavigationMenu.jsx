/*********************************
* File Name: NavigationMenu.jsx  *
* Author: Ameen Hamza            *
* Output: Navbar                 *
*********************************/

import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BsCart4 } from "react-icons/bs";
import { PiSignOut, PiSignIn } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import Cart from './Cart';
import { GlobalContext } from '../Context/context';
import LoginForm from './LoginForm';
import { LoginContext } from '../Context/Login-Context/login-context';
import SignupForm from './SignUpForm';
import ProfileForm from './ProfileForm';
import NavbarAdmin from './admin/NavbarAdmin';

function NavigationMenu() {
  const [categories, setCategories] = useState([]);
  const { state: loginState, dispatch: loginDispatch } = useContext(LoginContext);
  const { state: globalState, dispatch: globalDispatch } = useContext(GlobalContext);

  const logOutUser = () => {
    loginDispatch({ type: "LOGOUT_USER" });
  }

  useEffect(() => {
    // Fetch categories from the API
    fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const rowCount = 10; // Number of rows for categories

  // Divide categories into multiple arrays based on the row count
  const dividedCategories = Array.from({ length: rowCount }, (_, index) =>
    categories.filter((_, i) => i % rowCount === index)
  );

  return (
    <>
      {
        loginState.userRole !== "admin" ? (
            <Navbar collapseOnSelect expand="lg" sticky="top" className="custom-navbar" style={{background: 'linear-gradient(45deg, #fff,#000,lightblue, #000)', zIndex:'1000'}}>
              <Container>
                <Navbar.Brand href="/" className='nav-brand' style={{color:'#fff',fontSize:'26px'}}>ShopSmart</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link>
                      <Link className="text-decoration-none mx-2 nav-color" to="/">
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link className="text-decoration-none mx-2 nav-color" to="/about">
                        About
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link className="text-decoration-none mx-2 nav-color" to="/products">
                        Products
                      </Link>
                    </Nav.Link>
                    <NavDropdown title="Categories" id="collapsible-nav-dropdown" className='text-dark nav-color'>
                      {dividedCategories.map((column, columnIndex) => (
                        <div key={columnIndex} className="d-flex">
                          {column.map((category) => (
                            <NavDropdown.Item
                              key={category}
                              href={`/products/category/${category}`}
                              className="text-decoration-none"
                            >
                              {category.toUpperCase()}
                            </NavDropdown.Item>
                          ))}
                        </div>
                      ))}
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/products" className="text-center">
                        Show All
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    {loginState.userRole == "user" ? (
                      <ButtonGroup aria-label="Basic example">
                        <ProfileForm />
                        <Button variant="light" className="custom-button mx-3 d-flex align-items-center gap-2" style={{background:'transparent'}} href="#">
                          <BsCart4 className="navbar-icon text-white" />
                          <span className="d-block d-lg-inline"> <Cart /></span>
                        </Button>
                        <Button variant="light" style={{background:'transparent'}} className="custom-button d-flex align-items-center gap-2" onClick={logOutUser}>
                          <PiSignOut className="navbar-icon text-white" />
                          <span className="d-none d-lg-inline text-white"> Sign Out</span>
                        </Button>
                      </ButtonGroup>
                    ) : (
                      <ButtonGroup aria-label="Basic example">
                        <SignupForm style={{background:'transparent'}} />
                        <LoginForm style={{background:'transparent'}} />
                      </ButtonGroup>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        ) : (
          <NavbarAdmin />
        )
      }
    </>
  );
}

export default NavigationMenu;