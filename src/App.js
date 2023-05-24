import React from 'react';
import './App.css';
import PublicationCard from './PublicationCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PublicationLoad } from './components/PublicationButton';

function App() {
  return (
    <div className="App">
      <h1>Publikace</h1>
      <hr></hr>
      <PublicationCard/>
      <PublicationLoad/>

    </div>
  );
}

export default App;
