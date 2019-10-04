import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import useLocalStorage from "./hooks/useLocalStorage"
import CardContainer from './components/CardContainer';

function App() {
   const [googleData, setGoogleData] = useState([]);
    
   useEffect(() => {
    axios.get("http://localhost:5000/api/players")
      .then(res => setGoogleData(res.data))
      .catch(err => console.log('Woops!', err))
   }, []);

   return (
    <div className="App">
      <CardContainer googleData={googleData} />
    </div>
  );
}

export default App;