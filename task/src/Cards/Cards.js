import React from 'react'
import Account from '../Charts/Account';
import Invoices from '../Charts/Invoices';
import CashFlow from '../Charts/CashFlow';
import WatchList from '../Charts/WatchList';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <Account />
      <Invoices />
      <CashFlow />
      <WatchList />
    </div>
  )
}

export default Cards;
