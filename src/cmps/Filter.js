import FilterInput from "./FilterInput";
import FilterMode from "./FilterMode";


const Filter = ({ isRandom, onToggle, categories, onSubmit, onChange, filterBy }) => {
    return <form onSubmit={onSubmit} className="filter-container">
        <FilterMode
            isRandom={isRandom}
            onToggle={onToggle} />
        <FilterInput
            filterBy={filterBy}
            isRandom={isRandom}
            categories={categories}
            onChange={onChange} />
    </form>
}

export default Filter;