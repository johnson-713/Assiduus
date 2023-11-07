import './App.css';
import Account from './Charts/Account';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Account />
    </div>
  );
}

export default App;
