import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'

function App() {
  const { records, loading, error } = useFetchData(
    'https://student-data-api.anastasiaketchersid-757.workers.dev/api/v1/datasets/volcano-eruptions/records?limit=20'
  )

  if (loading) {
    return <p>Loading…</p>
  }

  return (
    <div>
      <h1>Volcano Atlas</h1>
      <p>
        A curious person needs a simple way to find information about volcanoes
        because the data can be difficult to explore. My page will let you
        search for a volcano by name and show its country, type, and elevation.
      </p>
      <p>{error}</p>
      {records.map((record) => <RecordCard key={record.id} record={record} />)}
    </div>
  )
}

export default App