import React from 'react';
// import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          {/* <Route path="todolist" element={<TodoList />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
