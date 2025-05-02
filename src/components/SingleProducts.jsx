import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleProducts = () => {

    let[phone,setPhone]=useState("")
    let[amount,setAmount] = useState("")
    let[loading,setLoading] = useState("");
    let[error,setError] = useState("");
    let[success,setSuccess] = useState("");

    const {product} = useLocation().state || {};

     const img_url = "https://nyati25.pythonanywhere.com/static/images/"

     const submitForm = async (e) => {
        e.preventDefault();

        setLoading("processing payment...")
        setSuccess("")
        try {
            const data = new FormData()
            data.append("amount",product.product_cost);
            data.append("phone",phone);
            const response = await axios.post("https://nyati25.pythonanywhere.com/api/mpesa_payment",data)
    
            setLoading("")
            setSuccess(response.data.message)
          } catch (error) {
            setLoading("");
            setError(error.message);
     };
    
     }

    return ( 
        <div className="" >
            <div className=" justify-content-center row mt-3">
    <nav className="m-4">
      <Link className="btn btn-dark mx-2" to="/">Home</Link>
      <Link className="btn btn-dark mx-2" to="/addproducts">Add Products</Link>
      <Link className="btn btn-dark mx-2" to="/signin" >Sign In</Link>
      <Link className="btn btn-dark mx-2" to="/signup">Sign UP</Link>
    </nav>
                <div className="col-md-3 card shadow">
                    <img src= {img_url + product.product_photo} alt="" />
                </div>
                <div className="col-md-3 card shadow">
                    <h2>{product.product_name}</h2>
                    <h3 className="text-warning">{product.product_cost}</h3>
                    <p className="text-muted">{product.product_desc}</p>
                      <b className="text-danger">{error}</b>
                      <b className="text-warning">{loading}</b>
                      <b className="text-success">{success}</b>

                    <form onSubmit={submitForm} >
                        <input type="number" placeholder="Enter Amount" className="form-control" required readOnly value={product.product_cost} /> <br />
                        <input type="tel" placeholder="Enter Mpesa No 2457xxxxxx" className="form-control" required onChange={(e)=>setPhone(e.target.value)} /> <br />
                       <button className="btn btn-danger" type="submit">Pay Now</button>
                    </form>
                </div>
            </div>
        </div>
      );
}
 
export default SingleProducts;