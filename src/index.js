import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
