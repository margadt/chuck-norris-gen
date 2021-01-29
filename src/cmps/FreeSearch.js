const FreeSearch = ({ onChange, filterBy }) => {
    return <div className="search-input free">
        <label htmlFor="search">Key word(s)</label>
        <input name="search" type="text" onChange={onChange} placeholder="e.g. egg, break, Chuck Norris, dumb" value={filterBy?.search}/>
    </div>
}

export default FreeSearch;