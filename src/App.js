import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>}>
        </Route>

          <Route path='/restaurant-detail/:id' element={<RestaurantDetails/>}/>        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
