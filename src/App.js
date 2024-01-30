import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategort from './Pages/ShopCategort';
import Product from './Pages/Product';
import Card from './Pages/Card';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kids_banner from "./Components/Assets/banner_kids.png"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/mens' element={<ShopCategort banner={men_banner}  category="men"/>}/>
              <Route path='/womens' element={<ShopCategort banner={women_banner} category="women"/>}/>
              <Route path='/kids' element={<ShopCategort  banner={kids_banner} category="kid"/>}/>
              <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}/>
              </Route>
              <Route path='/cart' element={<Card/>}/>
              <Route path='/login' element={<LoginSignup/>}/>

            </Routes>
            <Footer/>


      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
