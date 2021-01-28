import { useState } from "react";

const RandomSearch = ({ categories, onChange, filterBy }) => {
    const [selectClass, setSelectClass] = useState('');

    const onSelect = e => {
        onChange(e);
        const { target: { value } } = e;
        setSelectClass(value !== '' ? 'selected' : '');
    }

    return <>
        <div className="search-input">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" placeholder="e.g. Chuck Norris" type="text" onChange={onChange} value={filterBy?.name} />

        </div>
        <div className="search-input select">
            <label htmlFor="category">Categories </label>

            <select className={selectClass} id="category" name="category" onChange={onSelect} value={filterBy?.category}>
                <option value="" disabled>Pick a category</option>
                <option value="" disabled="disabled">──────────</option>
                {categories.map(category => {
                    return <option key={category} value={category}>{category}</option>
                })}
            </select>

        </div>

    </>
}

export default RandomSearch;