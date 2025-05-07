import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";
import './getproducts.css';
import { useCart } from "./CartContext";

const GetProducts = () => { 

  const image_url = "https://Munjogu.pythonanywhere.com/static/images/"

  let[products, setProducts] = useState([]);
  let[error,setError] = useState("");
  let[loading,setLoading] = useState("");
  let [filteredProducts, setFilteredProducts] = useState([]);



  const navigate = useNavigate();
  const {addToCart} = useCart(); 

  const getproducts = async () => {
    setError("");
    setLoading("Please Wait, Receiving Products...") 
    try {
      const response = await axios.get("https://Munjogu.pythonanywhere.com/api/getproducts")
      // console.log(response.data);
      setProducts(response.data);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError(error.message)
    }
  }
//  useEffect(function, list of dependancies)
  useEffect(() => {
    getproducts();
  },[])
  console.log(products)

  const handleSearch = (value) => {
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return ( 

<div className="row">
    {/* header component */}
      <Navbar />
      <br />
    {/* navbar component */}
    <br />
    <br />
    <div className="col-md-3"> 
     

     </div>
     
     
    {/* carousel */}
     <Carousel />
 
     <div className="row justify-content-center my-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search Products By Name"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    
    <h3 className="mt-5 text-success">Available products</h3>
    <b className="text-success">select your jerseys</b>
    <img src="" alt="" />
    <b className="text-warning">{loading}</b>
    <b className="text-danger">{error}</b>
    {filteredProducts.map((product)=>(
        <div className="col-md-3 justify-content-center mb-4">
        <div className="card shadow card-margin">
              <img src={image_url+product.product_photo} alt="" className="product_img mt-4" />
            <div className="card-body">
              <h5 className="card-body">{product.product_name}</h5>
              <p className="text-muted card-footer">{product.product_desc.slice(0,100)}</p>
              <b className="text-warning">{product.product_cost} KES</b>
              <button onClick={() => navigate("/singleproduct",{state: {product}})} className="btn btn-dark mt-2 w-100">View Details</button>
              <button onClick={() => addToCart (product)} className="btn btn-warning mt-2 w-100"> Add to Cart</button>
            </div>
        </div>
        
        </div>
    ))}
  
    {/* foooter component */}
    <Footer />
   </div>

   );
}
 
export default GetProducts;