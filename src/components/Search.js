import React, {useState} from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = ({setSearchResults}) => {
    const [value, setvalue] = useState();

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setSearchResults(await getImages(value));
    };

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
    );
};


export default Search;