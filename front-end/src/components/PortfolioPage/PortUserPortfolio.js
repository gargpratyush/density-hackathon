import PortfolioGraph from './PortfolioGraph';
import './PortUserPortfolio.css';

function PortUserPortfolio() {
  return (
    <div className='portuserportfolio'>
      <div className="currentmarketprice">
        Current Market price :
      </div>      
      <div className='userportfolio'>
          <table class="table table-info table-striped-columns">
      <thead>
        <tr class="table-info">
          <th scope="col">#</th>
          <th scope="col">Username</th>
          <th scope="col">Stocks</th>
          <th scope="col">Fiat $</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-info">
          <th scope="row">1</th>
          <td class="table-info">A</td>
          <td class="table-info">10</td>
          <td class="table-info">5000</td>
        </tr>
        <tr class="table-info">
          <th scope="row">2</th>
          <td class="table-info">B</td>
          <td class="table-info">20</td>
          <td class="table-info">3000</td>
        </tr>
        <tr class="table-info">
          <th scope="row">3</th>
          <td class="table-info">C</td>
          <td class="table-info">30</td>
          <td class="table-info">3500</td>
        </tr>
        <tr class="table-info">
          <th scope="row">4</th>
          <td class="table-info">D</td>
          <td class="table-info">40</td>
          <td class="table-info">2500</td>
        </tr>
        <tr class="table-info">
          <th scope="row">5</th>
          <td class="table-info">E</td>
          <td class="table-info">50</td>
          <td class="table-info">3000</td>
        </tr>
      </tbody>
    </table>
      </div>
    </div>
  )
}

export default PortUserPortfolio
