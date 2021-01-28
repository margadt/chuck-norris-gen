const FreeSearch = ({ onChange, filterBy }) => {
    return <div className="search-input free">
        <label htmlFor="search">Search</label>
        <input name="search" type="text" onChange={onChange} placeholder="e.g. Chuck Norris" value={filterBy?.search}/>
    </div>
}

export default FreeSearch;