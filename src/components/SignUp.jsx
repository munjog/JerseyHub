import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    let[username, setUsername] = useState("")
    let[email, setEmail] = useState("")
    let[password, setPassword] = useState("")
    let[phone, setPhone] = useState("")
    let[address, setAddress]=useState("")
    let [loading, setLoading] = useState("")
    let [success, setSuccess] = useState("")
    let [error, setError] = useState("")

    const submit = async (e)=>{
        e.preventDefault();
        try {
           setLoading("please wait...")
           setSuccess("")
           setError("")
           const data = new FormData()
           data.append ("username", username)
           data.append ("email",email)
           data.append ("phone", phone)
           data.append ("password", password)
            
           const response = await axios.post("https://Munjogu.pythonanywhere.com/api/signup", data)
           setSuccess(response.data.message)
           setLoading("")
           setUsername("")
           setEmail("")
           setPhone("")
           setPassword("")
           setAddress("")
         
        } catch (error) {
            setError("somthing went wrong...")
            setLoading("")
        }
    }
    

    return ( 
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 card shadow p-4">
                <h2>create an account</h2>
                <b className="text-success">{success}</b>
                <b className="text-danger">{error}</b>
                <b className="text-warning">{loading}</b>
                <form onSubmit={submit}>
                    <input type="text" className="form-control" placeholder="Enter username" required value={username} onChange={(e)=>setUsername(e.target.value)} />
                    <br />
                    <input type="Email" className="form-control" placeholder="Enter Email" required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br />
                    <input type="tel" className="form-control" placeholder="Enter phone number" required value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    <br />
                    <input type="text" className="form-control" placeholder="address" required value={address} onChange={(e)=>setAddress(e.target.value)} />
                    <br />
                    <input type="password" className="form-control" placeholder="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />
                    <button className="btn btn-success"type="submit">Sign up</button>
                </form>
                <br />
                <p>already have an account    <Link to="/signin">Sign in</Link></p>
            </div>
        </div>
     );
}
 
export default Signup;