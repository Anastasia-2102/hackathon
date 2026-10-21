function RecordCard({ record }) {
  return (
    <article>
      <h2>{record["Volcano Name"]}</h2>
      <p>Country: {record.Country}</p>
      <p>Type: {record.Type}</p>
    </article>
  )
}

export default RecordCard