
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rating from './components/Rating/Rating';
import PremiumBtn from './components/PremiumBtn/PremiumBtn';
import { Suspense } from 'react';
function App() {

  const dataAi = fetch('../public/cardData.json')
    .then(res => res.json())

  return (
    <>
      <Navbar dataAi={dataAi}></Navbar>
      <Banner dataAi={dataAi}></Banner>
      <Rating></Rating>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <PremiumBtn dataAi={dataAi}></PremiumBtn>
      </Suspense>
    </>
  );
}

export default App
