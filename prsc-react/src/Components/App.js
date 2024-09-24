import '../App.css';
// import Counter from './Counter.js'
import Navbar from './MyNavbar.js';
// import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../Pages/Dashboard.js';
import List from '../Pages/List.js';
import Listings from '../Pages/Listings.js';
import Orders from '../Pages/Orders.js';
import NoPage from '../Pages/NoPage.js';

function App() {
  return (


    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
