import React from "react";

export default function Navbar({ onSignIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-danger" href="#">
          <img src="../images/justeatlogo.png" alt="" height={36}/>
        </a>
        <div className="ms-auto">
          <button className="btn btn-outline-danger me-2">Order Now</button>
          <button className="btn btn-danger" onClick={onSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
