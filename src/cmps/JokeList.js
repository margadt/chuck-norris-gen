import { useEffect, useState } from 'react';
import JokePreview from './JokePreview';


const JokeList = ({ jokes, selectedJoke, onSelectJoke }) => {
    const [sortedJokes, setSortedJokes] = useState([]);
    const [isAscending, setIsAscending] = useState(true);
    const [spanClass, setSpanClass] = useState('');

    useEffect(_ => {
        const idSet = new Set();
        const copy = jokes.filter(joke => {
            if (idSet.has(joke.id)) return false;
            idSet.add(joke.id);
            return true;
        });
        const diff = isAscending ? 1 : -1;
        copy.sort((a, b) => a.created_at.localeCompare(b.created_at) * diff);
        setSortedJokes(copy);
        setSpanClass(isAscending ? '' : 'descending');
    }, [jokes, isAscending]);



    const onToggleSort = _ => {
        setIsAscending(!isAscending);
    }

    if (!jokes.length) return '';

    return <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Category</td>
                <td onClick={onToggleSort}>Date Created <span className={"arrow " + spanClass}></span></td>
            </tr>
        </thead>
        <tbody>
            {sortedJokes.map((joke, i) => <JokePreview key={joke.id + i} joke={joke} selectedJoke={selectedJoke} onSelectJoke={onSelectJoke} />)}
        </tbody>
    </table>
}

export default JokeList;