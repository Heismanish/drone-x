import { Link } from "react-router-dom";
import  "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light nav">
      <div className="container-fluid ">
        <Link className="navbar-brand" to={"/"}>
          <h1 className="heading">Drone-X</h1>
        </Link>
        <button
          className="navbar-toggler ham-menu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex" id="navbarNav">
          <ul className="navbar-nav nav-menu">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/career"}>
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/services"}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contacts"}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



// function Navbar() {
//   return (
// <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black ">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>

//   </div>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">
//         <a className="nav-link active" aria-current="page" href="#">Home</a>
//         <a className="nav-link" href="#">Features</a>
//         <a className="nav-link" href="#">Pricing</a>
//         <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//       </div>
//     </div>
// </nav>  )
// }

// export default Navbar