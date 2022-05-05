import logo from './logo.svg';
import './App.css';
import { Products } from './product components/Products';
import {Routes, Route} from "react-router-dom"
import { Category } from './product components/Category';
import { Cart } from './product components/Cart';
import { ProductFlex } from './product components/ProductFlex';
function App() {
  return (
    <div className="App">
   <Routes>
     <Route path='/*' element={<Products/>}/>
     <Route path='/Herbal-Supplements' element={<Category/>}/>
     <Route path='/Health-Interests' element={<Category/>}/>
     <Route path='/Oral-Care' element={<Category/>}/>
     <Route path='/Personal-Care' element={<Category/>}/>
     <Route path='/cart' element={<Cart/>}/>
   </Routes>
   {/* <ProductFlex/> */}
    </div>
  );
}

export default App;
