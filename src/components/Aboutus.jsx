import { Link } from "react-router-dom";
const Aboutus = () => {
    return ( <body>
        <section className="container-fluid">
            <section className="row">
                <div className="col-md-12">
                  <div className="navbar navbar-expand-md navbar-light">
                    <Link to="index.html" className="navbar-brand">
                      <h2>jersey</h2> <h3><i>Hub</i></h3>
                    </Link>
                    <button className="navbar-toggler" data-bs-target="#ivy" data-bs-toggle="collapse">
                      <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="collapse navbar-collapse" id="ivy">
                      <div className="navbar-nav">
                        <Link to="index.html" className="nav-link"></Link>
                        <Link to="" className="nav-link"></Link>
                        <Link to="" className="nav-link"></Link>
                      </div>
        
                      <div className="navbar-nav ms-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="./addproducts" className="nav-link">add products</Link>
                        <Link to="./signin" className="nav-link">sign in</Link>
                        <Link to="./signup" className="nav-link">sign up</Link>
        
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
              <h1 className="text-center">About us</h1>
              <p className="text-center p-4">We specialize in offering high quality sports jersey for fans and teams worldwide. our Mission is to deliver Comfort and style with every products. Jersey is your premier Destination for authentic soccer jersey.we also affer  wide selection of high-quality kits wheather your are a passionate fan or a dedicated player. find your perfect jersey with us. Shop Confidently, knowing you are getting perfect genuine merchendise at great Prices  </p>
              <h1 className="text-center">Our Mission</h1>
              <p className="text-center p-4">our mission is to offer best and with good Quality jerseys across the country</p>
        </section>
        <h2 className="text-center">our Partnership</h2>
        <p className="text-center">with have Partnership with various cloth brand in order to provide the bext quality jerseys</p>
        <section className="row">
          <h2 className="text-center">Partners</h2>
        <div className="col-md-6 text-center">
        <img src="images/download50.png" alt="" className="text-center"/>
        </div>
        <div className="col-md-6 text-center">
          <img src="images/download51.png" alt="" className="text-center"/>
        </div>
        </section>
        <br/><br/>
        <h2 className="text-center">Why choose us?</h2>
        <p className="text-center">
          <ul className="text-center">
            <li>WE have the best quality Jersey</li>
            <li>we have door to door delivery service</li>
          </ul>
        </p>
    
            {/* <!-- footer start --> */}
            <section className="row text-white bg-info p-4">
                <div className="col-md-4">
                  <h4 className="text-center">location</h4>
                  <p>we are located in Trunky's plaza 2nd floor</p>
                  <p className="text-dark">Address: 00100-2358</p>
                  <p></p>
                  <Link to="index.html" className="nav-link">Home</Link>
                  <Link to="products.html" className="nav-link">products</Link>
                  <Link to="about us.html" className="nav-link">About us</Link>
                  <Link to="contact us.html" className="nav-link">contact us</Link>
                </div>
    
                <div className="col-md-4">
                  <h4 className="text-center">Contact us</h4>
                  <form action=""/>
                    <input type="email" placeholder="Enter your Email" className="form-control"/> <br/>
                    <textarea name="" id="" className="form-control" placeholder="send us a message" rows="7"></textarea> <br/>
                    <input type="submit" value="send message" className="btn btn-outline-danger" /> <br />
                  
                </div>
    
                <div className="col-md-4">
                  <h4 className="text-center">stay Connected</h4> <br/>
                  <Link to="https:/facebook.com">
                    <img src="images/fb.png" alt=""/>
                  </Link>
                  <Link to="https:/instagram.com">
                    <img src="images/in.png" alt=""/>
                  </Link>
                  <p className="text-dark">you can keep up in our our social platforms</p>
                </div>
               </section>
               <footer className="bg-dark text-white text-center p-2">
                <h5>jersey hub collections&copy;2025. all right reserved</h5>
               </footer>
                {/* <!-- footer end --> */}
        
    
    
    </body> );
}
 
export default Aboutus;