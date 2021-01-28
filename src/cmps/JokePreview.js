const JokePreview = ({ joke }) => {
    const date = new Date(joke.created_at).toLocaleString();
    return <li>
        <p>{joke.value}</p>
        <span>Created at: {date}</span>
    </li>
}

export default JokePreview;