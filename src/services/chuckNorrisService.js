const BASE_URL = 'https://api.chucknorris.io/jokes';

const getCategories = async _ => {
    try{
        const res = await fetch(`${BASE_URL}/categories`);
         return await res.json();
    }catch (err){
        console.log(err)
    }
}



const query = async filterBy => {
    try {
        if (filterBy.search.length > 1) {
            const res = await fetch(`${BASE_URL}/search?query=${filterBy.search}`);
            return await res.json();
        }
        const query = `${filterBy.name ? 'name=' + filterBy.name + '&' : ''}${filterBy.category ? 'category=' + filterBy.category : ''}`
        const res = await fetch(`${BASE_URL}/random?${query}`)
        return await res.json();
    } catch (err) {
        console.log(err)
    }

}

const chuckNorrisService = {
    query,
    getCategories
}

export default chuckNorrisService;