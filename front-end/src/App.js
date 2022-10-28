import PortfolioGraph from "./components/PortfolioPage/PortfolioGraph";
import PortUserPortfolio from "./components/PortfolioPage/PortUserPortfolio";

import React, { useEffect, useState} from 'react';


function App() {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

  return (
    <div className="App">
      <PortfolioGraph />
    </div>
  );
}

export default App;
