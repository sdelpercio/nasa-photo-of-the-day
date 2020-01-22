import React, {useState, useEffect} from "react";
import axios from 'axios';
import HeaderBar from './components/HeaderBar/HeaderBar.js';
import MasonryLayout from './components/MasonryLayout/MasonryLayout.js';
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res);
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <HeaderBar />
      <MasonryLayout data={data}/>
    </div>
  );
}

export default App;
