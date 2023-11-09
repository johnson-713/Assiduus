import React from "react";
import "./WatchList.css";

function WatchList() {
    const data = [
        {account: "Sales", monthlyRevenue: "1,194.58", yearToDate: "11,418.29"},
        {account: "Advertising", monthlyRevenue: "6,879.02", yearToDate: "9,271.36"},
        {account: "Inventory", monthlyRevenue: "4,692.26", yearToDate: "9,768.09"},
        {account: "Entertainment", monthlyRevenue: "0.00", yearToDate: "0.00"},
        {account: "Product", monthlyRevenue: "4,652.10", yearToDate: "2,529.90"},
    ]
  return (
    <div className="list">
      <div className="header">
        <h3>Account watchlist</h3>
      </div>
      <div className="body">
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: 'none', padding: '8px', textAlign: 'left', width: '60%', color: 'lightGray' }}>Account</th>
          <th style={{ border: 'none', padding: '8px', textAlign: 'left', width: '20%', color: 'lightGray' }}>This Month</th>
          <th style={{ border: 'none', padding: '8px', textAlign: 'left', width: '20%', color: 'lightGray' }}>YTD</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.account}>
            <td style={{ border: 'none', padding: '8px' }}>{item.account}</td>
            <td style={{ border: 'none', padding: '8px' }}>{item.monthlyRevenue}</td>
            <td style={{ border: 'none', padding: '8px' }}>{item.yearToDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </div>
  );
}

export default WatchList;
