import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import S1 from './S1.jsx'
import S2 from './S2.jsx'
import S3 from './S3.jsx'
import S4 from './S4.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/s1" element={<S1 />} />
      <Route path="/s2" element={<S2 />} />
      <Route path="/s3" element={<S3 />} />
      <Route path="/s4" element={<S4 />} />
    </Routes>
  </BrowserRouter>
)
