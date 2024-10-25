import './App.css';
 // Core styles
import 'primeicons/primeicons.css'; // Icons


import "primereact/resources/themes/lara-light-indigo/theme.css";

        
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Order from './pages/order/order';
import OrderDetail from './pages/order/orderDetail/orderDetail';
import CreateOrder from './pages/order/createProduct/createOrder';
import Product from './pages/product/product';

        
function App() {
  return (
      <div className="bg-main-bg">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={(<Home/>)}></Route>
        <Route path='/order' element={(<Order/>)}></Route>
        <Route path='/order/detail/:id' element={(<OrderDetail/>)}></Route>
        <Route path='/order/create' element={(<CreateOrder/>)}></Route>

        <Route path='/product' element={(<Product/>)}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  
  )
}

export default App;
