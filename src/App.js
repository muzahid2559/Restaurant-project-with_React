import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import {BrowerRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowerRouter>
        <MainComponent/>
      </BrowerRouter>
      
    </div>
  );
}

export default App;
