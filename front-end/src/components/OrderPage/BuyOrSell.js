import React from 'react'
import UserContext from '../../Context/UserContext';
import { useContext } from 'react';
import { useState } from 'react';

function BuyOrSell() {
  const usercontext = useContext(UserContext);
  const {users, setUsers} = usercontext;  

  console.log(users)
  
  return (
    <div>
      <div className="Buy-OR-Sell">
      <select className="form-select" aria-label="Default select example">
        <option selected>Buy OR Sell</option>
        <option value="Buy">Buy</option>
        <option value="Sell">Sell</option>
    </select>
      </div>
      <div className='Select-User'>
      <select id="IdforselectUser" className="form-select" aria-label="Default select example">
        <option selected>Select a User</option>
        {
          users.map(user => <option value={user.user_name}>{user.user_name}</option>
          )
        }
        
    </select>
      </div>
      <div className="Order-Type">
      <select className="form-select" aria-label="Default select example">
        <option selected>Order Type (Limit / Market)</option>
        <option value="1">Limit</option>
        <option value="2">Market</option>
    </select>
      </div>
      <div className='Stock/Price'>
      <input className="form-control" type="text" placeholder="Stock Amount" aria-label="default input example"></input>
      <input className="form-control" type="text" placeholder="Price" aria-label="default input example"></input>
      </div>
      <button type="button" className="btn btn-success">Place order</button>
    </div>
  )
}

export default BuyOrSell
