import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-primary">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white fs-3" to="/">
           NewsHub
          </Link>
          <button className="navbar-toggler bg-warning" type="utton">
            <span
              className="navbar-toggler-icon"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSuport"
            ></span>
          </button>
          <div
            className="collapse d-lg-flex  justify-content-lg-between navbar-collapse"
            id="navbarSuport"
          >
            <ul className="navbar-nav ">
            
              <li className="nav-item">
                <Link className="nav-link text-white" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/eduction">
                  Eduction
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/technology">
                Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/politics">
                Politics
                </Link>
              </li>
            </ul>

            
          </div>
        </div>
      </nav>
    )
  }
}
