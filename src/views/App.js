import { useEffect, useState } from 'react';
import Filter from '../cmps/Filter';
import Header from '../cmps/Header';
import JokeList from '../cmps/JokeList';
import JokeQuotePreview from '../cmps/JokeQuotePreview';
import chuckNorrisService from '../services/chuckNorrisService';
import '../styles/global.scss';

function App() {
  const [isRandomMode, setIsRandomMode] = useState(true);
  const [filterBy, setFilterBy] = useState({ name: '', search: '', category: '' });
  const [categories, setCategories] = useState([]);
  const [randomJoke, setRandomJoke] = useState('');
  const [jokes, setJokes] = useState([]);
  const [selectedJoke, setSelectedJoke] = useState(null);

  useEffect(_ => {
    (async _ => {
      const res = await chuckNorrisService.getCategories();
      setCategories(res);
    })();
  }, []);

  const handleInput = ({ target: { name, value } }) => {
    setFilterBy({
      ...filterBy,
      [name]: value
    });
  }

  const onSubmit = async e => {
    e.preventDefault();

    if (isRandomMode) {
      const res = await chuckNorrisService.getRandomJoke(filterBy);
      setRandomJoke(res.value);
      return;
    }
    let res = await chuckNorrisService.query(filterBy);
    if (res?.result?.length) {
      if (res.result.length > 100) res.result = res.result.slice(0, 101);
      setJokes([
        ...jokes,
        ...res.result
      ]);
      setFilterBy({
        ...filterBy,
        search: ''
      });
    }
  }

  const toggleRandomMode = _ => {
    setIsRandomMode(!isRandomMode);
  }

  const onSelectJoke = joke => {
    setSelectedJoke(joke);
  }

  return <main>
    <Header />
    <Filter
      filterBy={filterBy}
      isRandom={isRandomMode}
      onToggle={toggleRandomMode}
      onSubmit={onSubmit}
      categories={categories}
      onChange={handleInput} />
    <section className="content">
      {isRandomMode ?
        <JokeQuotePreview quote={randomJoke} /> :
        <JokeList jokes={jokes} selectedJoke={selectedJoke} onSelectJoke={onSelectJoke} />}
    </section>


  </main>
}

export default App;




