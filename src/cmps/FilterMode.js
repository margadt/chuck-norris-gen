const FilterMode = ({ isRandom, onToggle }) => {
    return <div className="filter-mode" onClick={onToggle}>
        <button type="button" className={isRandom ? 'active' : ''}>Random</button>
        <button type="button" className={!isRandom ? 'active' : ''}>Search</button>
    </div>
}

export default FilterMode;