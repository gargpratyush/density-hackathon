import React, { useEffect, useState } from 'react'
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import {Line} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend
);



function PortfolioGraph() {
    const [chartData, setChartData] = useState({datasets:[]})
    const [chartOptions, setChartOptions] = useState({})
    useEffect(()=>{
        setChartData({
            labels:["a,b,c,d,e"],
            datasets:[
                {
                    label:"qwertyui",
                    data:[10,40,60,90,170],
                    borderColor:"red",
                    backgroundColor:"green"
                }
            ]
        });
        setChartOptions({
            responsive:true,
            plugins:{
                legends:{
                    position:"top"
                },
                title:{
                    display:true,
                    text:"sdfghj"
                }
            }

            
        })
    })
  return (
    <div>
        <Line options={chartOptions} data={chartData}/>
    </div>
  )
}

export default PortfolioGraph