import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyButton from './Components/Button';
import PublicationTable from './Components/Table';

function App() {
  return (
    <div className="App">
      <MyButton/>
      <hr></hr>
      <PublicationTable/>
    </div>
  );
}

export default App;