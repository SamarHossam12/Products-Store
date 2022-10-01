import React, { useState } from "react";
import "./navbar.css";
import NavLink from "../link/link";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch=useDispatch()
  let [navelements, setnavelements] = useState([
    { data: "/", content: "Home" },
    { data: "/products", content: "Products" },
    { data: "/favs", content: "Your Cart" },
  ]);
  let lang = useSelector((state) => state.lang);
  
  return (
    <>
    
      <div className="container-fuild">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
          <a class="navbar-brand" href="#">
            P-store
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {navelements.map((item) => (
                <NavLink data={item.data} content={item.content} />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
