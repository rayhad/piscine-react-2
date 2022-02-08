import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/header.jsx'
import CarnetdeNote from './pages/CarnetdeNote'
import reportWebVitals from './reportWebVitals'
import Statistiques from './pages/Statistiques'
import CreationNote from './pages/CreationNote'
import CreationCarnet from './pages/CreationCarnet'
import ListeCarnet from './pages/ListeCarnet'
import ModifNote from './pages/ModifNote'
import ModifCarnet from './pages/ModifCarnet'
import ListeCarnetNote from './pages/ListeCarnetNote'


ReactDOM.render(
  <React.StrictMode>
    <main>
    <Router>
    <Header/>

    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/CarnetdeNote" element={<CarnetdeNote />}/>
      <Route path="/Statistiques" element={<Statistiques />}/>
      <Route path="/CreationNote/:id" element={<CreationNote />}/>
  
      <Route path="/ModifNote/:id" element={<ModifNote/>}/>
      <Route path="/CreationCarnet" element={<CreationCarnet/>}/>
      <Route path="/ListeCarnet" element={<ListeCarnet/>}/>
      <Route path="/ModifCarnet/:id" element={<ModifCarnet/>}/>
      <Route path="/ListeCarnetNote/:id" element={<ListeCarnetNote/>}/>
    </Routes>
    </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
