import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation';
import Validation from './Materi/Form'
import { Hooks } from './Materi/Hooks';
import { Komponen } from './Materi/Komponen';
import Lifecycle from './Materi/Lifecycle';
import Rendering from './Materi/Rendering';
import Reuseable from './Materi/Reusable';
import Styling from './Materi/Styling';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}/>
        <Route path="/validation" element={<Validation/>} />
        <Route path="/hooks" element={<Hooks/>}/>
        <Route path="/komponen" element={<Komponen/>}/>
        <Route path="/lifecycle" element={<Lifecycle/>}/>
        <Route path="/rendering" element={<Rendering/>}/>
        <Route path="/reuseable" element={<Reuseable/>}/>
        <Route path="/styling" element={<Styling/>}/>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
