import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Student from './Pages/Student';
import Addstudent from './Pages/Addstudent';
import Editstudent from './Pages/Editstudent';

import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
         <Route path='/' element={<Student/>} />
          <Route path='/add-student' element={<Addstudent/>} />
          <Route path='/edit-student/:id' element={<Editstudent/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;