import React from "react";
import "../styles/search-results.css";

const SearchResults = ({results}) => {
    return (
        <>
            <p>Search Results</p>
            <div className="image-container">
            {results.map((image) => (<img 
                                      className="card-image"
                                      src={image}
                                      alt="space-image" />))}
            </div>
        </>
    );
};

export default SearchResults;