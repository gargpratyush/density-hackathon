import React from 'react'

function BuyOrSell() {
  return (
    <div>
      <div className="Buy-OR-Sell">
      <select className="form-select" aria-label="Default select example">
        <option selected>Buy OR Sell</option>
        <option value="1">Buy</option>
        <option value="2">Sell</option>
    </select>
      </div>
      <div className='Select-User'>
      <select className="form-select" aria-label="Default select example">
        <option selected>Select a User</option>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
        <option value="4">D</option>
        <option value="5">E</option>
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
    </div>
  )
}

export default BuyOrSell
