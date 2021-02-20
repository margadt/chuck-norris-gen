const JokeQuotePreview = ({ quote, className, articleRef }) => {
    if (!quote) return '';
    const jokeClass = className ? className : '';

    return <article className={"quote " + jokeClass} ref={articleRef}>
        <span>{quote}</span>
    </article>
}

export default JokeQuotePreview;