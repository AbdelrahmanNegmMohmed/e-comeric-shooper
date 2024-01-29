import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategort from './Pages/ShopCategort';
import Product from './Pages/Product';
import Card from './Pages/Card';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/mens' element={<ShopCategort  category="men"/>}/>
              <Route path='/womens' element={<ShopCategort category="women"/>}/>
              <Route path='/kids' element={<ShopCategort category="kid"/>}/>
              <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}/>
              </Route>
              <Route path='/cart' element={<Card/>}/>
              <Route path='/login' element={<LoginSignup/>}/>

            </Routes>


      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
