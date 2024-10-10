import {BrowserRouter , Navigate, Route, Routes} from 'react-router-dom'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import Product from './pages/Product'
import NotFound from './pages/404'
import Developers from './pages/Developers'
function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/products' element={<Products  />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/developers' element={<Developers />} >
          <Route path='front_end' element={<h2>Front End</h2>} />
          <Route path='back_end' element={<h2>Back End</h2>} />
        </Route>
        <Route path='/programers' element={<Navigate to="/developers" />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
