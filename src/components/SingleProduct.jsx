import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import './SingleProducts.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const SingleProduct = () => {
    const { product } = useLocation().state || {};
    let [phone, setPhone] = useState("");
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        setLoading("Processing payment.....");
        setSuccess("");
        try {
            const data = new FormData();
            data.append("amount", product.product_cost);
            data.append("phone", phone);

            const response = await axios.post("https://Munjogu.pythonanywhere.com/api/mpesa_payment", data);
            setLoading("");
            setSuccess(response.data.message);
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    const img_url = "https://Munjogu.pythonanywhere.com/static/images/";

    return (
        <div className="single-product-container">
            <Navbar />
            <h6 className="text-center text-warning">Single Product</h6>
            <hr />
            <div className="row justify-content-center mt-3">
                <div className="col-md-3 card shadow single-product-card">
                    <img src={img_url + product.product_photo} alt="" />
                </div>
                <div className="col-md-3 card shadow single-product-card">
                    <h2>{product.product_name}</h2>
                    <h3 className="text-warning">{product.product_cost}</h3>
                    <p className="text-muted">{product.product_desc}</p>
                    <b className="text-warning">{loading}</b>
                    <b className="text-danger">{error}</b>
                    <b className="text-success">{success}</b>

                    <form onSubmit={submitForm}>
                        <input
                            type="number"
                            placeholder="amount"
                            required
                            readOnly
                            value={product.product_cost}
                            className="form-control"
                        />
                        <br />
                        <input
                            type="tel"
                            placeholder="Enter Mpesa No 2547xxxxxxxx"
                            required
                            className="form-control"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                        />
                        <br />
                        <button className="btn btn bg-primary">Pay Now</button>
                    </form>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default SingleProduct;