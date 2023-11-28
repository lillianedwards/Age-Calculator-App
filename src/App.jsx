import React from 'react';
import './Style.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Form from './components/CalcForm';

function App() {


  return (
    <>
      <Router>
        <Routes>
        <Route path ='/' element={<Form />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
