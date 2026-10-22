function RecordCard({ record, favorite, onToggleFavorite }) {
  return (
    <article className="volcano-card">
      <h2>{record["Volcano Name"]}</h2>
      <button onClick={onToggleFavorite}>
        {favorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
      </button>
      <p>Country: {record.Country}</p>
      <p>Type: {record.Type}</p>
      <p><strong>Elevation:</strong> {record.Elevation} m</p>
    </article>
  )
}

export default RecordCard