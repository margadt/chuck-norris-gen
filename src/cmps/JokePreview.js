import { useEffect, useState } from "react";
import JokeQuotePreview from "./JokeQuotePreview";

const JokePreview = ({ joke, selectedJoke, onSelectJoke }) => {
    const [trClass, setTrClass] = useState('');
    useEffect(_ => {
        if (joke.id === selectedJoke?.id) {
            setTrClass('selected');
            return;
        }
        setTrClass('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedJoke])

    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(joke.created_at).toLocaleString('en-US', options);
    const onClick = _ => {
        if (selectedJoke?.id === joke.id) {
            onSelectJoke(null);
            return;
        }
        onSelectJoke(joke);
    }
    return <>
        <tr className={trClass} onClick={onClick}>
            <td>{joke.id}</td>
            <td className="capitalize">{joke.categories}</td>
            <td>{date}</td>
        </tr>
        {joke.id === selectedJoke?.id && <tr className="selected-quote"><td colSpan="3"><JokeQuotePreview className="selected" quote={joke.value} /></td></tr>}
    </>
}

export default JokePreview;