import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Icon } from '@iconify-icon/react';
import "./navbar.css";

function BasicExample() {
  return (
      /* Navbar w/ Icon */
     <Navbar bg="navbarColor" data-bs-theme="dark" className="navbarText">
        <div className="ps-5 pt-3 d-inline-block align-center">
            <Icon icon="noto:pink-heart" alt="Heart Logo" width="50" height="50"></Icon>
        </div>
        <div className="ps-4 d-inline-block align-center">
            Valentines Day 2024
        </div>
      </Navbar>
    
  );
}

export default BasicExample;