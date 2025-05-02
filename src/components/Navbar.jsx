import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <section className="row">
      <div className="col-md-12 my-4 mx-7">
        <div className="navbar navbar-expand-md navbar-light ">
          <Link to="/" className="navbar-brand">
            <img src="images/download.png" alt="" width="50px" height="50px" />
          </Link>
          <button className="navbar-toggler" data-bs-target="#ivy" data-bs-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="ivy">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">
                <img src="/images/download (36).jpeg" alt="" width="20px" height="20px" /> Home
              </Link>
              <Link to="AddProducts" className="nav-link">Add products</Link>
            </div>
            <div className="navbar-nav ms-auto">
              {user ? (
                <>
                  <b className="text-warning nav-link">Hello {user.username || "User"}</b>
                  <button className="nav-link" onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/signin" className="nav-link">Login</Link>
                  <Link to="/signup" className="nav-link">Register</Link>
                </>
              )}
              <Link to="/aboutus" className="nav-link">About us</Link>
              <Link to="/todo" className="nav-link">to_do list</Link>
              <Link to="/cart" className="nav-link"><img src="/images/download4.png" alt="" width="20px" height="20px"/> </Link>
              <Link to="/oders" className="nav-link">place order</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;