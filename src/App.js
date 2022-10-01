import "./App.css";
// import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/products/product";
import Favs from "./components/favs/favs";

function App() {
  var title = "Movies";

  return (
    <>
     
      <Router>
      <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/favs" component={Favs} />
      </Router>
    </>
  );
}

export default App;
