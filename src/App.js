import React, {useState, useEffect} from "react";
import axios from 'axios';
import HeaderBar from './components/HeaderBar/HeaderBar.js';
import MasonryLayout from './components/MasonryLayout/MasonryLayout.js';
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //   .get('https://api.nasa.gov/planetary/apod?api_key=i1foIZ6W3bEQFHu7fgFJhu4CHaKrcveJxLWYIXmJ&count=7')
  //   .then(res => {
  //     console.log(res);
  //     setData(res.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }, []);

  return (
    <div className="App">
      <HeaderBar />
      <MasonryLayout columns={3} gap={25}>
        {
          [...Array(12).keys()].map(key => {
            const height = 200 + Math.ceil(Math.random() * 300);

            return (
              <div style={{height: `${height}px`}} />
            )
          })
        }
      </MasonryLayout>
    </div>
  );
}

export default App;
