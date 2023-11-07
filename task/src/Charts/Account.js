import React from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';

function Account() {
  return (
    <div className='account' style={{ marginTop: 100, marginLeft: 300}}>
        <div className='header'>
        <h3>Checking account</h3>
        
        </div>
        <LineChart />
        <BarChart />
    </div>
  )
}

export default Account;
