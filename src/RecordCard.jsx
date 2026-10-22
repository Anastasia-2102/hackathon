function RecordCard({ record }) {
  return (
    <article className="volcano-card">
      <h2>{record["Volcano Name"]}</h2>
      <p>Country: {record.Country}</p>
      <p>Type: {record.Type}</p>
      <p><strong>Elevation:</strong> {record.Elevation} m</p>
    </article>
  )
}

export default RecordCard