import './App.css';
import Cards from './Cards/Cards';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<div className='app__page'>
            <Sidebar />
            <Cards />
          </div>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
