import React from "react";
import Header from "./Compnents/Header";
import Footer from "./Compnents/Footer";
import "./home.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Compnents/HomeScreen";
import ProductScreen from "./Compnents/productscreen";
import Cartscreen from "./Compnents/Cartscreen";
import RegisterScreen from "./Compnents/registerScreen";
import LoginScreen from "./Compnents/loginScreen";
import ProfileScreen from './Compnents/profileScreen'
import ShippingScreen from "./Compnents/ShippingScreen";
import PaymentScreen from "./Compnents/PaymentScreen";
import PlaceorderScreen from "./Compnents/PlaceorderScreen";
import OrderScreen from './Compnents/OrderScreen'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            {/* <Route path='/cart/' element={<Cartscreen />} /> */}
            <Route path='/cart/:id' element={<Cartscreen />} />
            <Route path='/cart' element={<Cartscreen />} />
            <Route path='login/shipping' element={<ShippingScreen/>} />
            <Route path='/shipping' element={<ShippingScreen/>} />
            <Route path="/register" element={<RegisterScreen/>}/>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/profile/' element={< ProfileScreen />} />
            <Route path='/payment/' element={< PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceorderScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
