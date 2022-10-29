import React from 'react';
import Portfolio from "./components/PortfolioPage/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderPage from './components/OrderPage/OrderPage';
import UserState from './Context/UserState';

function App() {

  return (
    <div className="App">
      <UserState>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/order' element={<OrderPage />} />
        </Routes>
        </BrowserRouter>
      </UserState>
    </div>
  );
}

export default App;
