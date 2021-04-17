import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/global.css'
import Login from './components/LoginPage/Login'
import Register from './components/RegisterPage/Register'
import { RegisterSectionProvider } from './contexts/RegisterSectionContext'

function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <RegisterSectionProvider>
        <Route exact path='/register' component={Register} />
      </RegisterSectionProvider>
    </Router>
  );
}

export default App;