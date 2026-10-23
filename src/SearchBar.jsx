function SearchBar({ onSearch }) {
    return (
    <form onSubmit={(event) => {
    event.preventDefault()
    onSearch()
    }}>
    <input
        type="text"
        id="query"
        placeholder="Search volcanoes by name..."
    />
    <button type="submit">Search Volcanoes</button>
    </form>
)
}

export default SearchBar