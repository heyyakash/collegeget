import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">CollegeGet</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/sell">Sell Item</Link> */}
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Gadgets</a>
            <a className="dropdown-item" href="#">Textbooks</a>
            {/* <div className="dropdown-divider"></div> */}
            <a className="dropdown-item" href="#">Vehicles</a>
            <a className="dropdown-item" href="#">Accessories</a>
          </div>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  </div>
  )
}

export default Navbar