import { useState, useEffect} from 'react'
import './App.css'
import Header from '/src/Header'
import MovieList from '/src/MovieList'
import NowPlaying from './NowPlaying'
import Searching from './Searching'
import Modal from './Modal'


const App = () => {
  const[isSearching, setIsSearching] =useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClose = () => {
    return;
  }

  return (
    <div className="App">
    <Header setIsSearching={setIsSearching}/>
    <main>
      {isSearching ? (
        <NowPlaying />
      ) : <Searching />}

    </main>
  </div>
    )
}

export default App
