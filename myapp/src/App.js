import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import { Router } from "@reach/router";

//Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from "./pages/ProductDetails";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import MyAccount from "./pages/MyAccount";


function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header/>
      <Router>
        <Home path="/" />
        <MyAccount path="my-account" />
        <SignIn path="sign-in"/>
        <Register path="register"/>
        <ProductDetails path="product-details/:productId"/>
        <Cart path="/cart" />
      </Router>
    </main>
  );
}

export default App;
