import {React, useState} from "react";
import "../styles/search.css";

const Search = () => {
    const [value, setvalue] = useState();

    return(
    <>
    <form className="search-form">
        <input 
        className="search-input" 
        type="text"
        onChange={(e) => setvalue(e.target.value)} 
        />
        <button className="search-btn" type="submit">
            Go!
        </button>
    </form>
    </>
    )
};


export default Search;