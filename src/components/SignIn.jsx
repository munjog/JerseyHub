import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './SignIn.css';

const SignIn = () => {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");

    let navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setLoading("please wait ...");

            const data = new FormData();
            data.append("username", username);
            data.append("password", password);

            const response = await axios.post("https://Munjogu.pythonanywhere.com/api/signin", data);

            if (response.data.user) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate("/");
            } else {
                setLoading("");
                setError(response.data.message);
            }
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 card shadow p-4 signin-container">
                <h2>SignIn</h2>
                <p className="text-danger">{error}</p>
                <p className="text-warning">{loading}</p>
                <form onSubmit={submitForm} className="signin-form">
                    <input type="text" className="form-control" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <input type="password" className="form-control" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button className="btn btn-success">SignIn</button> <br />
                </form>
                <br />
                <p>Don't have an account
                    <Link to="/signup"> Sign Up</Link></p>
            </div>
        </div>
    );
}

export default SignIn;