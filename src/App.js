import './App.css';
import { Home } from './Components';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App(p) {

  const [apiData, setApiData] = useState([]);
  const [getImage, setGetImage] = useState("Rain");
  const [variableChange, setVariableChange] = useState(true);

  let num = Math.floor(Math.random() * 20);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(`https://pixabay.com/api/?key=32540211-1f1417761a3d62eaa518f7599&q=${getImage}&image_type=photo`);
      setApiData(data.data.hits);
    }
    apiCall();
  }, [getImage, variableChange])
  return (
    <div className='outerApp'>
      <div className="App" style={{ backgroundImage: `url(${apiData[num]?.largeImageURL})` }}>
        <Home setVariableChange={setVariableChange} variableChange={variableChange} setGetImage={setGetImage} />
      </div>
    </div>
  );
}

export default App;
