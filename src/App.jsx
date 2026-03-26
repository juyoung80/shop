
import './App.css'
import Header from './layouts/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './layouts/Main'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          {/* <Main /> */}
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/products" element={<ProductList />} />
            {/* :id -> products/1과 같음  */}
            <Route path='/products/:id' element={<ProductInfo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
