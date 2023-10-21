import React from "react";
import "../styles/search-results.css";

const SearchResults = ({results}) => {
    if (!results.length){
        return <h1>no results</h1>
    }else{
        return (
            <>
                <h1 className="search-header">Search Results</h1>
                <div className="image-container">
                {results.map((image) => (<img 
                                        className="card-image"
                                        src={image}
                                        alt="space-image" />))}
                </div>
            </>
        );
    }
};

export default SearchResults;