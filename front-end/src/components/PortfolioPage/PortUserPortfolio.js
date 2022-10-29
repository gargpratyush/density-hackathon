import './PortUserPortfolio.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function PortUserPortfolio() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get("/users")
      .then((response)=>{
        setUsers(response.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  }, [])
  return (
    <div className='portuserportfolio'>
      <div className="currentmarketprice">
        Current Market price :
      </div>      
      <div className='userportfolio'>
          <table className="table table-info table-striped-columns">
      <thead>
        <tr className="table-info">
          <th scope="col">Username</th>
          <th scope="col">Stocks</th>
          <th scope="col">Fiat $</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => (
            
              <tr key={user.user_id} className="table-info">
                <td className="table-info">{user.user_name}</td>
                <td className="table-info">{user.stocks}</td>
                <td className="table-info">{user.balance}</td>
        </tr>
          
          ))
        }
      </tbody>
    </table>
      </div>
    </div>
  )
}

export default PortUserPortfolio
