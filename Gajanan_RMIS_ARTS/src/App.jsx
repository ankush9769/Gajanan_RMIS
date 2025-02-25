import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contacts from './pages/Contacts'
import Category from './pages/Category'
import FAQ from './pages/FAQ'
import Privacy from './pages/Privacy'
import Terms_Condition from './pages/Terms_Condition'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <div style={{ backgroundColor: '#F5F5DC' }}>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms_condition" element={<Terms_Condition />} />
      </Routes>
      <Footer></Footer>

    </BrowserRouter>

    </div>
    
  )
}

export default App
