import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormUser from './componentes/FormUser';

import Primercomponente from './appejemplo';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import FormRegister from "./componentes/From"

import Home from './componentes2/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Form from "./componentes/From"

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/header" elemen={<Header/>}/>
    </Routes>
  </BrowserRouter>

  // <React.StrictMode>
    

  //   <App />
    

  //   <FormRegister/>
  //   <Header/>
  //   <Primercomponente/>
  //   <Footer/>
  //   <FormUser/>
    
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
