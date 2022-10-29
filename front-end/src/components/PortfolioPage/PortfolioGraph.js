import React, { useEffect, useState } from 'react'
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
// import {Bar} from 'react-chartjs-2'
// import {Chart} from 'chart.js';
import {Line} from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



function PortfolioGraph() {
  
    
  return (
    <div>
      Grap
        {/* <canvas id="myChart" width="500px" height="500px"><Line options={} data={}/></canvas> */}
        
    </div>
  )
}

export default PortfolioGraph