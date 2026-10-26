function SearchBar({ searchText, onSearchTextChange, onSearch }) {
    return (
    <form onSubmit={(event) => {
    event.preventDefault()
    onSearch()
    }}>
    <input
        type="text"
        id="query"
        value={searchText}
        onChange={(event) => onSearchTextChange(event.target.value)}
        placeholder="Search volcanoes by name..."
    />
    <button type="submit">Search Volcanoes</button>
    </form>
)
}

export default SearchBar