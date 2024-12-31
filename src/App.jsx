import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'
import WatchHistory from './Pages/WatchHistory'
import PageNotFound from './Pages/PageNotFound'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/WatchHistory' element={<WatchHistory/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
