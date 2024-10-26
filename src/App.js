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
import CreateProduct from './pages/product/createProduct/createProduct';
import Line from './pages/charts/line';
import Pie from './pages/charts/pie';
import Bar from './pages/charts/bar';
import Area from './pages/charts/area';

        
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
        <Route path='/product/createProduct' element={(<CreateProduct/>)}></Route>

        <Route path='/charts/line' element={(<Line/>)}></Route>
        <Route path='/charts/pie' element={(<Pie/>)}></Route>
        <Route path='/charts/bar' element={(<Bar/>)}></Route>
        <Route path='/charts/area' element={(<Area/>)}></Route>



      </Routes>
      </BrowserRouter>
    </div>
  
  )
}

export default App;
