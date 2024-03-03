import Header from './Components/Header/Header';
import { Home } from './Components/HomePage/Home';
import Product from './Components/Store/Product';
import Signup from './Components/Store/Signup';
import Store from './Components/Store/Store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Store/Cart';
import Footer from './Components/Footer/Footer';
import Checkout from './Components/Store/Checkout';
import Payment from './Components/Store/Payment';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/store' element={<Store />} />
          <Route path='/product' element={<Product />} />
          <Route path='cart' element={<Cart/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='payment' element={<Payment/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
