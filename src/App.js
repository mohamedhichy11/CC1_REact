import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './home/home';
import ProductList from "./products/productList";
import NavBar from "./nav/Navbar";
import Slider from "./slider/slider";
import Calculator from "./calcule/calcu";
import Add_to_list from "./todolist/todolist";

function App() {
  return <Router>
    <NavBar/>
    <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/silder" element={<Slider />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/TODOLIST" element={<Add_to_list />} />
        <Route path="/listeProduct" element={<ProductList />} />
      </Routes>
    </Router>
  
}
export default App;
       