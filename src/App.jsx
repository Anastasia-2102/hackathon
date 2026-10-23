import { useEffect, useState } from 'react'
import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'

function App() {
  const [query, setQuery] = useState("")
  const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem('volcanoFavorites')
  return savedFavorites ? JSON.parse(savedFavorites) : []
})
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  useEffect(() => {
  localStorage.setItem('volcanoFavorites', JSON.stringify(favorites))
}, [favorites])

  const { records, loading, error } = useFetchData(
    `https://student-data-api.anastasiaketchersid-757.workers.dev/api/v1/datasets/volcano-eruptions/records?limit=20&search=${query}`
  )

  const search = () => {
    setQuery(document.querySelector("#query").value)
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
  <form onSubmit={(event) => {
  event.preventDefault()
  search()
}}>
  <input
    type="text"
    id="query"
    placeholder="Search volcanoes by name..."
  />
  <button type="submit">Search Volcanoes</button>
  </form>
  <hr />
  <p>❤️ Favorites: {favorites.length}</p>

<button onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}>
  {showFavoritesOnly ? 'Show All Volcanoes' : 'Show Favorites Only'}
</button>

      {displayedRecords.length === 0 ? (
  <p>No volcanoes found. Try another name.</p>
) : (
  <div className="volcano-grid">
  {displayedRecords.map((record) => (
    <RecordCard
      key={record.id}
      record={record}
      favorite={favorites.some((item) => item.id === record.id)}
      onToggleFavorite={() => toggleFavorite(record)}
    />
  ))}
</div>
)}
</main>
  )
}

export default App