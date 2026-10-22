import { useState } from 'react'
import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'

function App() {
  const [query, setQuery] = useState("")

  const { records, loading, error } = useFetchData(
    `https://student-data-api.anastasiaketchersid-757.workers.dev/api/v1/datasets/volcano-eruptions/records?limit=20&search=${query}`
  )

  const search = () => {
    setQuery(document.querySelector("#query").value)
  }

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
      {records.length === 0 ? (
  <p>No volcanoes found. Try another name.</p>
) : (
  records.map((record) => (
    <RecordCard key={record.id} record={record} />
  ))
)}
</main>
  )
}

export default App