import { useEffect, useState } from 'react';
import JokePreview from './JokePreview';


const JokeList = ({ jokes }) => {
    const [sortedJokes, setSortedJokes] = useState([]);

    useEffect(_ => {
        const copy = [...jokes];
        copy.sort((a, b) => a.created_at.localeCompare(b.created_at));
        setSortedJokes(copy);
    }, [jokes]);


    return <ul className="joke-list">
        {sortedJokes.map((joke, i) => <JokePreview key={joke.id + i} joke={joke} />)}
    </ul>
}

export default JokeList;