import React, {useState, useEffect} from "react";
import axios from 'axios';
import HeaderBar from './components/HeaderBar/HeaderBar.js';
import MasonryLayout from './components/MasonryLayout/MasonryLayout.js';
import "./App.css";
import styled from 'styled-components';

const NasaImage = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 10px 10px 20px -6px rgba(0,0,0,0.8);
`;


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=i1foIZ6W3bEQFHu7fgFJhu4CHaKrcveJxLWYIXmJ&count=12')
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
      <MasonryLayout className='MasonryContainer' columns={4} gap={20}>
        {
          [...Array(12).keys()].map(key => {
            const height = 170 + Math.ceil(Math.random() * 150);

            if (!data[key]) {
              return (
                <div style={{height: `${height}px`}} />
              )
            }
            return (
              <NasaImage className='MasonryImg' style={{height: `${height}px`}} src={data[key].url} alt={data[key].title}/>
            )
            
          })
        }
      </MasonryLayout>
    </div>
  );
}

export default App;
