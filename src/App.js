import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import Signup from './components/SignUp';
import SignIn from './components/SignIn';
import AddProducts from './components/AddProducts';
import Getproducts from './components/GetProducts'; 
import SingleProduct from './components/SingleProduct';
import Aboutus from './components/Aboutus';
import PlaceOrder from './components/PlaceOrder';
import HomePage from './components/Products';
import ChatBot from './components/ChatBot';
import Cart from './components/Cart';



function App() {
  return (
   <Router>
       <header>
       <div className="App">
    
         <Routes>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/AddProducts' element={<AddProducts/>} />
            <Route path='/getproducts' element={<Getproducts/>} />
            <Route path='/singleproduct' element={<SingleProduct/>} />
            <Route path='/aboutus' element={<Aboutus/>} />
            <Route path='/oders' element={<PlaceOrder/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/' element={<HomePage/>} />
            <Route path='/chatbot' element={<ChatBot/>} />


         </Routes>

        </div>
       </header>
   </Router>
  );
}

export default App;
