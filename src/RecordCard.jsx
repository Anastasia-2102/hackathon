import { useState } from 'react'

function RecordCard({ record }) {
  const [favorite, setFavorite] = useState(false)
  return (
    <article className="volcano-card">
      <h2>{record["Volcano Name"]}</h2>
      <button onClick={() => setFavorite(!favorite)}>
    {favorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
      </button>
      <p>Country: {record.Country}</p>
      <p>Type: {record.Type}</p>
      <p><strong>Elevation:</strong> {record.Elevation} m</p>
    </article>
  )
}

export default RecordCard