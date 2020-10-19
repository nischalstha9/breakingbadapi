import React, {useState} from 'react'


const Search = ({getQuery}) => {//here we are receiveing getQuery function from App.js to give current queryName to App.js
    const [text, setText] = useState('')
    function filter_by_search(query) {
        setText(query)
        getQuery(query)
    }
    return (
        <section className='search'>
            <form>
                <input type='text' className='form-control' placeholder='Search..' autoFocus value={text} onChange={(e) => filter_by_search(e.target.value)}/>
            </form>
        </section>
    )
}

export default Search
