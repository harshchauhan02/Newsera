import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'


export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-success ">
        <div className="container-fluid text-white">
            <Link className="navbar-brand" to="/"><img src={logo}alt="logo" className="main__logo" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health" >Health</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment" >Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports" >Sports</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology" >Technology</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/bussiness" >Bussiness</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science" >Science</Link></li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar