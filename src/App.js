import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Productlist from "./Components/Productlist";
import OralProduct from "./Components/OralProduct";
import Details from "./Components/Detail";
import Cart from "./Components/Cart/Cart";
import Default from "./Components/Default";
import Modal from "./Components/Modal";
import login from "./Components/Login/login";
import register from "./Components/Login/register";
import CheckOut from "./Components/Cart/CheckOut";
import SearchBarHandler from "./Components/SearchBarHandler";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Productlist} />
        <Route exact path="/oral" component={OralProduct} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={login} />
        <Route path="/checkout" component={CheckOut} />
        <Route path="/register" component={register} />
        <Route path={"/search/:str"} component={SearchBarHandler} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
