import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
  return (
     <div className="footer-container">
          <section className="row text-white bg-info p-4">
            <h2 className="text-center">Jersey Hub</h2>
            <p className="text-center colour-dark">Be a part of the game</p>
            <div className="col-md-4">
              <h4 className="text-center text-dark">Location</h4>
              <p className="text-dark">We are located in Trunky's plaza ground floor</p>
              <p className="text-dark">Address: 00100-45670</p>
              
              <Link to="/" className="nav-link">Home</Link>
              <Link to="./addproducts" className="nav-link">Add Products</Link>
              <Link to="./signin" className="nav-link">Sign In</Link>
              <Link to="./signup" className="nav-link">Sign Up</Link>
            </div>

            <div className="col-md-4">
              <h4 className="text-center">Contact Us</h4>
              <form>
                <input type="email" placeholder="Enter your Email" className="form-control"/> <br/>
                <textarea name="" id="" className="form-control" placeholder="Send us a message" rows="7"></textarea> <br/>
                <input type="submit" value="Send Message" className="btn btn-outline-danger"/>
              </form>
            </div>

            <div className="col-md-4">
              <h4 className="text-center">Stay Connected</h4> <br/>
              <Link to="https://facebook.com">
                <img src="images/fb.png" alt="Facebook"/>
              </Link>
              <Link to="https://instagram.com">
                <img src="images/in.png" alt="Instagram"/>
              </Link>
              <p className="text-dark">You can keep up with us on our social platforms. You can order your jerseys through our various platforms easily. Always remember to stay connected through our platforms on Amazon, Facebook, and Instagram.</p>
            </div>
           </section>
           <footer className="bg-light text-dark text-center p-2">
            <h5>Jersey Hub Collections &copy;2025. All rights reserved.</h5>
           </footer>
     </div>
    );
}
 
export default Footer;