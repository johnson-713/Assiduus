import './App.css';
import Account from './Charts/Account';
import CashFlow from './Charts/CashFlow';
import Invoices from './Charts/Invoices';
import WatchList from './Charts/WatchList';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Account />
      <Invoices />
      <CashFlow />
      <WatchList />
    </div>
  );
}

export default App;
