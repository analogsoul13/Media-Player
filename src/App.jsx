import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/his' element={<History/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
