const JokeQuotePreview = ({ quote, className }) => {
    if (!quote) return '';
    const jokeClass = className ? className : '';

    return <article className={"quote " + jokeClass}>
        <span>{quote}</span>
    </article>
}

export default JokeQuotePreview;