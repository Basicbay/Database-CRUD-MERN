import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";


// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>

      <div className="text-center bg-success text-white pt-3 pb-1">
        <h3 className="fw-bold">MERN Stack</h3>
        <p>Employee Database</p>
      </div>

      <nav className="navbar navbar-light text-black my-2" style={{paddingLeft: '1rem', paddingRight: '1rem'}} >
        <button type="button" class="btn btn-secondary text-center m-auto" style={{width: '100%'}}>
          <NavLink className="nav-link enable-button-pointers mx-auto" to="/create">
          Create Record
          </NavLink>
        </button>
      </nav>
      
    </div>
  );
}