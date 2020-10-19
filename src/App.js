import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/ui/header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/search'
import axios from 'axios'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [queryName, setQueryName] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://breakingbadapi.com/api/characters?name=${queryName}`)
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems()
  }, [queryName])// here the queryName in array defines dependencies which recalls useEffectmethod when dependency change

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQueryName(q)} />{/* here getQuery is function which is passed to Search component which takes query from Search COmponent and sets queryName Value. In other words getQuery is function passed as props to bind queryName(App.js) and text(Search.js) */}
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;