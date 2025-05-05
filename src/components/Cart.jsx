import React, { useState } from "react";
import { useCart } from "./CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Cart.css";
import axios from "axios";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const img_url = "https://munjogu.pythonanywhere.com/static/images/";

  const calculateTotal = () => {
    return cart.reduce((acc, product) => acc + parseInt(product.product_cost), 0);
  };

  const submitPayment = async (e) => {
    e.preventDefault();
    setLoading("Processing Payment...");
    setSuccess("");
    setError("");

    if (!/^(254)\d{9}$/.test(phone)) {
      setError("Invalid phone number format. Please enter a valid Kenyan number.");
      setLoading("");
      return;
    }

    try {
      const data = new FormData();
      const totalAmount = calculateTotal();

      data.append("amount", totalAmount);
      data.append("phone", phone);

      const response = await axios.post("https://munjogu.pythonanywhere.com/api/mpesa_payment", data);

      setLoading("");

      const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      const order = {
        id: orderId,
        phone: phone,
        total_amount: totalAmount,
        items: cart,
        status: "Order Placed",
      };

      localStorage.setItem(`order_${orderId}`, JSON.stringify(order));

      cart.forEach((item) => removeFromCart(item.id));

      setSuccess(`Payment successful! Your Order ID is ${orderId}. You can now track your order.`);
    } catch (error) {
      setLoading("");
      setError(
        error.response?.data?.message || error.message || "Something went wrong. Please try again."
      );
    }
  };

  const handleBuyNow = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h3 className="text-primary mb-4">
          <b>Your Cart</b>
        </h3>

        {cart.length === 0 ? (
          <div className="alert alert-warning text-center">Your cart is empty</div>
        ) : (
          <div className="row">
            {cart.map((product, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm">
                  <img
                    src={img_url + product.product_photo}
                    alt={product.product_name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.product_name}</h5>
                    <p className="card-text text-muted">
                      {product.product_desc.slice(0, 50)}...
                    </p>
                    <p className="text-warning fw-bold">{product.product_cost} KSh</p>

                    <button
                      className="btn btn-danger w-100 mb-2"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="text-center mt-4">
            <h4 className="text-success">Total: KSh {calculateTotal()}</h4>
            <button className="btn btn-primary mt-3" onClick={handleBuyNow}>
              Proceed to Checkout
            </button>
          </div>
        )}

        {/* Payment Modal */}
        {showModal && (
          <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Your Order</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <h4>Total: KSh {calculateTotal()}</h4>
                  {error && <p className="text-danger">{error}</p>}
                  {success && <p className="text-success">{success}</p>}
                  <form onSubmit={submitPayment}>
                    <div className="mb-3">
                      <label className="form-label">Enter MPesa Number (254XXXXXXXXX)</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter MPesa Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="spinner-border spinner-border-sm" />
                      ) : (
                        "Pay Now"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;