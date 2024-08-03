
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login.js';
import MyOrder from './screens/MyOrder';
// import Navbar from './components/Navbar';
import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/ContextReducer.js';

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* <Route exact path="/login" element={<Login/>} /> */}
        <Route exact path="/myorder" element={<MyOrder />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;




