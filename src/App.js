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
import TodoList from './components/todolist';
import PlaceOrder from './components/PlaceOrder';
import AddToCart from './components/AddToCart';
import HomePage from './components/Products';



function App() {
  return (
   <Router>
       <header>
       <div className="App">
        <img src="images/download.png" alt="" width="100px" height="100px" />
         <Routes>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/AddProducts' element={<AddProducts/>} />
            <Route path='/getproducts' element={<Getproducts/>} />
            <Route path='/singleproduct' element={<SingleProduct/>} />
            <Route path='/aboutus' element={<Aboutus/>} />
            <Route path='/todo' element={<TodoList/>} />
            <Route path='/oders' element={<PlaceOrder/>} />
            <Route path='/cart' element={<AddToCart/>} />
            <Route path='/' element={<HomePage/>} />


         </Routes>

        </div>
       </header>
   </Router>
  );
}

export default App;
