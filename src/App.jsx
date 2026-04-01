
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rating from './components/Rating/Rating';
import PremiumBtn from './components/PremiumBtn/PremiumBtn';
import Features from './components/Features/Features';
import { Suspense, useState,  } from 'react';
import { ToastContainer } from 'react-toastify';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
function App() {

  const dataAi = fetch('/cardData.json')
    .then(res => res.json())
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} setCart={setCart} dataAi={dataAi}></Navbar>
      <Banner dataAi={dataAi}></Banner>
      <Rating></Rating>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <PremiumBtn cart={cart} setCart={setCart} dataAi={dataAi}></PremiumBtn>
      </Suspense>

      <Features></Features>
      <Pricing></Pricing>
      <Footer></Footer>

      {/* Toast */}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App
