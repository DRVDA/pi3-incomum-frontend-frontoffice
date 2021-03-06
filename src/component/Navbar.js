import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/style.css";

function Navbar() {
  return (
    <nav className="navbar bg-amarelo">
        <div className="container-fluid">
          <img
            src={require("../images/logotipoincommun.png")}
            className="img-fluid inclogosize"
          />
          <div className="p-2 bd-highlight text-white text-decoration-none gabemenumargin2">
            <Link to="/" className="text-white">
            <h3 className="gabelinks3 text-decoration-none">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              Menu
            </h3>
              </Link>
          </div>
        </div>
      </nav>
  );

}

export default Navbar
