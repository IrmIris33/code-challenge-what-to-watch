import React from 'react';
import './CSS/App.css';
import './CSS/Header.css';
import './CSS/Card.css';
import './CSS/Container.css';
import Header from './Components/Header';
/*import MovieCard from './Components/MovieCard';
import Container from './Components/Container';*/



function App() {


  return (
    <div className="App">
    
        <Header />

        <div className='current'> Current Search </div>
          <div className='row'>
              {/*<Container />
          </div>

          <div className='previous'> Previous 3 Searches </div>

          <MovieCard />*/}
        </div>
        

    </div>
  );
}

export default App;
