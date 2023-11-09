import './App.css';
import Account from './Charts/Account';
import Invoices from './Charts/Invoices';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Account />
      <Invoices />
    </div>
  );
}

export default App;
