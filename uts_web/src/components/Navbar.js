import arbisoftlogo from "../images/arbisoftlogo.png";

function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <img
          className="mx-5 my-3"
          style={{ height: 35, width: 130 }}
          src={arbisoftlogo}
          alt="arbisoft"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Why Arnisoft <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                What we do
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 3
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Who we work with
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 3
                  </a>
                </li>
              </ul>
            </li>
            
            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Our products
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 3
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Inside Arbisoft
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 3
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Careers
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Submenu item 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
