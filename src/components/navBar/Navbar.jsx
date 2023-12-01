const Navbar = () => {
  return (
    <div className=" ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top z-3">
        <div className="container-fluid">
          <a className="navbar-brand text-success" href="#">
            ClimateCoachGPT
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              className="bi bi-globe-americas text-success"
              style={{ fontSize: "2rem" }}
            ></i>
          </button>{" "}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
