import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import './Navbar.css';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const navigate = useNavigate();

  const { cart } = useCart(); // ✅ corrected from Cart to cart

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <section className="row">
      <div className="col-md-12 my-4 mx-7">
        <div className="navbar navbar-expand-md navbar-light">
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
              <Link to="/ChatBot" className="nav-link">Bot</Link>

              <li className="nav-item me-3 position-relative">
                <Link to="/cart" className="nav-link position-relative">
                  <img src="images/download (3.0).png" height="30px" alt="Cart" />
                  {cart && cart.length > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "0.6rem" }}
                    >
                      {cart.length}
                    </span>
                  )}
                </Link>
              </li>

              <Link to="/oders" className="nav-link">place order</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
