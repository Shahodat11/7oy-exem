import './App.css'
import { Routes, Route, Link} from "react-router-dom"
import Home from './pages/home/Home'
import Admin from './pages/admin/Admin'
import Login from './pages/login/Login'
import Single from './pages/single/Single'
import Auth from './pages/auth/Auth'
import Contact from './pages/contact/Contact'
import Wishlist from './pages/wishlist/Wishlist'
// import Cart from './pages/cart/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Auth/>}>
          <Route path='/Admin' element={<Admin/>}/>
        </Route>
        <Route path='/wishlist' element={<Wishlist/>}/>
        {/* <Route path='/cart' element={<Cart/>}/> */}
        <Route path='/Login' element={<Login/>}/>
        <Route path='/single/:id' element={<Single/>}/>
      </Routes>
    </>
  )
}

export default App
