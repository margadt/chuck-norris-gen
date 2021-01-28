import RandomSearch from "./RandomSearch";
import FreeSearch from "./FreeSearch";

const FilterInput = ({ isRandom, categories, onChange, filterBy }) => {

    return <div className="filter-input">
        {
            isRandom ?
                <RandomSearch categories={categories} onChange={onChange} filterBy={filterBy} /> :
                <FreeSearch onChange={onChange} filterBy={filterBy}/>
        }
        <button type="submit">GO!</button>

    </div>


}

export default FilterInput;