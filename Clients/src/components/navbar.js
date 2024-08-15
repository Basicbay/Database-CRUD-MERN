import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center text-white"
        style={{ background: "#4D4DC4", height: "130px" }}
      >
        <p className="headfont fw-bold text-center" style={{ fontSize: "2rem" }}> 
          Employee Database
        </p>
      </div>

      <nav
        className="navbar navbar-light text-black my-3"
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <button
          type="button"
          class="btn btn-secondary text-center m-auto"
          style={{ width: "100%", maxWidth: "1280px" }}
        >
          <NavLink
            className="nav-link enable-button-pointers mx-auto "
            to="/create"
          >
            Create Record
          </NavLink>
        </button>
      </nav>
    </div>
  );
}
