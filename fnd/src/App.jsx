import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ProtectedRoute } from './components/utils/ProtectedRoute.jsx';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route element={<ProtectedRoute canAccess={false} redirectTo={'/login'} />}>
          <Route path='' element ={<Home />} />
        </Route>
        <Route path='/login' element ={<Login />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
