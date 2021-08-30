import React, {useState, useEffect} from 'react';
import './CSS/App.css';
import './CSS/Header.css';
import './CSS/MovieCard.css';
import './CSS/Container.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Container from './Components/Container';


function App() {
  const [movieData, setMovieData] = useState([])

  const getMovieRequest = async (url) => {
    console.log(url);
    const res = await fetch(url);
    const resJson = await res.json();
 
    if (resJson) setMovieData(resJson);
  }
 
  const setFetchUrl = (searchParam, typeSelection) => {
    let url
    (typeSelection === undefined) ? url = `https://www.omdbapi.com/?apikey=47fad17f&t=${searchParam}` : url = `https://www.omdbapi.com/?apikey=47fad17f&t=${searchParam}&type=${typeSelection}`
  
  getMovieRequest (url)
  
  }
 
  useEffect(() => {
    setFetchUrl('Harry_Potter');
  }, []);


  return (
    <div className="App">
    
        <Header setFetchUrl={setFetchUrl} />

        <div className='current'> Current Search </div>
          <div className='row'>
            <Container movieData={movieData} recentSearch={false} />
          </div>

          <div className='previous'> Previous 3 Searches </div>
          <div className='row'>
            <Container movieData={movieData} recentSearch={true}/>
          </div>
    </div>
        
  );
}

export default App;
