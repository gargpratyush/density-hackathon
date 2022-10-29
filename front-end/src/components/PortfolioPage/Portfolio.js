import React from 'react';
import PortfolioGraph from './PortfolioGraph';
import PortUserPortfolio from './PortUserPortfolio';
import TransactionHistory from './TransactionHistory';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div>
      <div className="PortfolioContainer">
        <div style={{backgroundColor:"#FAF7F0", height:"60vh"}}>
            <PortfolioGraph />
        </div>
        <div style={{backgroundColor:"aliceblue", height:"60vh"}}>
            <PortUserPortfolio />
        </div>
        
        <div style={{backgroundColor:"antiquewhite", height:"38vh"}}>
            <TransactionHistory />
        </div>
        <div className='BuyorSellButton'>
            <Link to="/order">Buy OR Sell</Link>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
