
import "./App.css";
import Home from "./Component/Pages/Home/Home";
import Header from "./Component/Pages/Header/Header";
import Contact from "./Component/Pages/Contact/Contact";
import Footer from "./Component/Pages/Footer/Footer";
import Projects from "./Component/Pages/Projects/Projects";
import Service from "./Component/Pages/Service/Service";
import { Route, Routes } from "react-router-dom";
import Myprotfolio from "./Component/Pages/Myprotfolio/Myprotfolio";
import Progresslevel from "./Component/Pages/Progresslevel/Progresslevel";



function App() {
 
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<Myprotfolio></Myprotfolio>}></Route>
        <Route path="/service" element={<Myprotfolio></Myprotfolio>}></Route>
      </Routes>
    </div>
  );
}

export default App;
