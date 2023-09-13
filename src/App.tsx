import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AppProvider from './contexts/appContext'

function App() {

  return (
    <>
    <AppProvider>
      <Login/>
      <Dashboard/>
    </AppProvider>
    </>
  )
}

export default App
