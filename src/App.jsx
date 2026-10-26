import { useEffect, useState } from 'react'
import useFetchData from './useFetchData.js'
import VolcanoMap from './VolcanoMap.jsx'
import SearchBar from './SearchBar.jsx'
import FavoritesFilter from './FavoritesFilter.jsx'
import VolcanoList from './VolcanoList.jsx'
import Footer from './Footer.jsx'

function App() {
  const [query, setQuery] = useState("")
  const [searchText, setSearchText] = useState("")
  const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem('volcanoFavorites')
  return savedFavorites ? JSON.parse(savedFavorites) : []
})
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  useEffect(() => {
  localStorage.setItem('volcanoFavorites', JSON.stringify(favorites))
}, [favorites])

  const { records, loading, error } = useFetchData(
    `https://student-data-api.anastasiaketchersid-757.workers.dev/api/v1/datasets/volcano-eruptions/records?limit=21&search=${query}`
  )

  const search = () => {
  setQuery(searchText)
}
  const toggleFavorite = (record) => {
  setFavorites((currentFavorites) =>
    currentFavorites.some((item) => item.id === record.id)
      ? currentFavorites.filter((item) => item.id !== record.id)
      : [...currentFavorites, record]
  )
}

const displayedRecords = showFavoritesOnly
  ? records.filter((record) =>
      favorites.some((item) => item.id === record.id)
    )
  : records

  if (loading) {
    return <p>Loading…</p>
  }



  return (
<main className="container">
  <header>
    <h1>🌋 Volcano Atlas</h1>
    <p>
    Explore volcanoes around the world.
    Search by name to discover their country and type.
    </p>
  </header>
      <p>{error}</p>
  
  <div className="search-container">
  <SearchBar
    searchText={searchText}
    onSearchTextChange={setSearchText}
    onSearch={search}
  />
  </div>

  <hr />
  <h2>🌍 Volcano Map</h2>
  <VolcanoMap />
  <p className="favorites-count">❤️ Favorites: {favorites.length}</p>

  <FavoritesFilter
  showFavoritesOnly={showFavoritesOnly}
  onToggle={() => setShowFavoritesOnly(!showFavoritesOnly)}
  />

  <VolcanoList
    records={displayedRecords}
    favorites={favorites}
    onToggleFavorite={toggleFavorite}
  />
  <Footer />
</main>
  )
}

export default App