function SearchBar({setSearchQuery}){
    return(
        <div className="search-container">
        <input type="text" placeholder="Search movies..." className="search-input" onChange={(e) => {setSearchQuery(e.target.value)}}/>
        <button className="search-button"Search></button>
        </div>
    )
}

export default SearchBar;
