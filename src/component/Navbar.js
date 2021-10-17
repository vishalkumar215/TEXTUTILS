import react from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";



export default function Navbar(props) {
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/about">{props.about}</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/">Contact</Link>
      </li>
      
      
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
    
<div className={`custom-control custom-switch  mx-2 `}>
  <input type="checkbox" className="custom-control-input mx-3"onClick={props.toggleMode} id="customSwitches"/>
  <label className="custom-control-label" htmlFor="customSwitches">Mode Change</label>
</div>
    

      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>



    );

}
Navbar.propTypes ={title:PropTypes.string.isRequired, about:PropTypes.string};
//we also have defauly prototyp