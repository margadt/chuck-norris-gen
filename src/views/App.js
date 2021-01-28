import { useEffect, useState } from 'react';
import Filter from '../cmps/Filter';
import Header from '../cmps/Header';
import JokeList from '../cmps/JokeList';
import chuckNorrisService from '../services/chuckNorrisService';
import '../styles/global.scss';

function App() {
  const [isRandomMode, setIsRandomMode] = useState(true);
  const [filterBy, setFilterBy] = useState({ name: '', search: '', category: '' });
  const [categories, setCategories] = useState([]);
  const [jokes, setJokes] = useState([]);

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
    const res = await chuckNorrisService.query(filterBy);
    if (res) {
      if (res?.result?.length) {
        setJokes([
          ...jokes,
          ...res.result
        ]);
      } else if (res.value){
        setJokes([
          ...jokes,
          res
        ]);
      }
      setFilterBy({
        ...filterBy,
          search:''
      });
    };

  }


  const toggleRandomMode = _ => {
    setIsRandomMode(!isRandomMode);
  }

  return <section>
    <Header />
    <Filter
      filterBy={filterBy}
      isRandom={isRandomMode}
      onToggle={toggleRandomMode}
      onSubmit={onSubmit}
      categories={categories}
      onChange={handleInput} />
    <JokeList jokes={jokes} />
  </section>
}

export default App;
