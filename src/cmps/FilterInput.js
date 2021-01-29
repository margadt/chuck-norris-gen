import RandomSearch from "./RandomSearch";
import FreeSearch from "./FreeSearch";
import { useEffect, useState } from "react";

const FilterInput = ({ isRandom, categories, onChange, filterBy }) => {
    const [btnClass, setBtnClass] = useState('');
    useEffect(_ => {

        if (isRandom) {
            if (filterBy.name) {
                setBtnClass('active');
                return;
            }
        } else {
            if (filterBy.search) {
                setBtnClass('active');
                return;
            }
        }
        setBtnClass('');
    }, [isRandom, filterBy.name, filterBy.search])

    return <div className="filter-input">
        {
            isRandom ?
                <RandomSearch categories={categories} onChange={onChange} filterBy={filterBy} /> :
                <FreeSearch onChange={onChange} filterBy={filterBy} />
        }
        <button className={btnClass} type="submit">GO!</button>

    </div>


}

export default FilterInput;