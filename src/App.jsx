
import './App.css'
import Header from './layouts/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './layouts/Main'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'
import AddProduct from './pages/AddProduct'
import Signin from './pages/Signin'
import { useState } from 'react'



function App() {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // 로그인한 사용자 ID관리
  const [userId, setUserId] = useState('')

  // 로그인 핸들러
  const handleLogin = (userId) => {
    setIsLoggedIn(true);// 로그인 성공시 상태 업데이트
    setUserId(userId); // 로그인한 사용자 ID 업데이트
  };

  // 로그아웃 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false); // 로그아웃시 로그인 상태 초기화
    setUserId(''); // 로그아웃시 사용자 ID 초기화
  };


  return (
    <>
      <div>
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn} userId={userId} onLogout={handleLogout} />
          {/* <Main /> */}
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/products" element={<ProductList />} />
            {/* :id -> products/1과 같음  */}
            <Route path='/products/:id' element={<ProductInfo />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/signin' element={<Signin onLogin={handleLogin}/>} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
