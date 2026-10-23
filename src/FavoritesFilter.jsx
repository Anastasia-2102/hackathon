function FavoritesFilter({ showFavoritesOnly, onToggle }) {
    return (
    <button onClick={onToggle}>
    {showFavoritesOnly
        ? 'Show All Volcanoes'
        : 'Show Favorites Only'}
    </button>
)
}

export default FavoritesFilter