import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav class="navbar bg-amarelo">
        <div class="container-fluid">
          <img
            src={require("../images/logotipoincommun.png")}
            className="img-fluid w-25"
          />
          <div class="p-2 bd-highlight text-white">
            <Link to="/" className="text-white">
            <h4>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              
              Menu
            </h4>
              </Link>
          </div>
        </div>
      </nav>
  );

}

export default Navbar
