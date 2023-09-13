import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AppProvider from './contexts/appContext'
import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
          <Toaster/>
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App
