import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateGroups from './pages/CreateGroups';
import AllGroups from './pages/AllGroups';



function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateGroups />} />
          <Route path="/all-groups" element={<AllGroups />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
