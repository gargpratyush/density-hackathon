import './PortUserPortfolio.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function PortUserPortfolio() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get("/users")
      .then((response)=>{
        console.log(response.data);
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
          <table class="table table-info table-striped-columns">
      <thead>
        <tr class="table-info">
          <th scope="col">Username</th>
          <th scope="col">Stocks</th>
          <th scope="col">Fiat $</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => (
            
              <tr class="table-info">
                <td class="table-info">{user.user_name}</td>
                <td class="table-info">{user.stocks}</td>
                <td class="table-info">{user.balance}</td>
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
