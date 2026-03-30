import React from "react";
import { Link, Routes, Route, NavLink } from "react-router-dom";

// Correct the type for function prop
interface NavbarProps {
  onReset: () => void;
  itemCount: number;
}

// 1. Destructure the prop
const Navbar = ({ onReset, itemCount}: NavbarProps) => {
  console.log("Navbar rendered");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 mb-3 shadow">
      <Link className="navbar-brand fw-bold" to="/">🚀 My App</Link>
        
      
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
      
      
      <div className="navbar-nav me-auto">
      <NavLink className="nav-link" to="/" >Home</NavLink>
      <NavLink className="nav-link" to="/about" >About</NavLink>
      <NavLink className="nav-link" to="/user" >User</NavLink>
      </div>

      <div className="d-flex align-items-center">
        <span className="badge bg-light text-dark">{itemCount}</span>
        <button className="btn btn-outline-danger btn-sm" onClick={onReset}>
          Reset Global List
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
