import { useState } from 'react'
import VolcanoDetails from './VolcanoDetails.jsx'

function RecordCard({ record, favorite, onToggleFavorite }) {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <article className="volcano-card">
  {record["Volcano Name"] === "Vesuvius" ? (
  <img
    className="volcano-photo"
    src="https://upload.wikimedia.org/wikipedia/commons/3/37/05_2023_Vesuvio_%28Napoli_ITA%29_photo_Paolo_Villa_FO221680_correction_with_gimp.jpg"
    alt="Mount Vesuvius in Naples, Italy"
  />
  ) : record["Volcano Name"] === "Campi Flegrei" ? (
  <img
    className="volcano-photo"
    src="https://upload.wikimedia.org/wikipedia/commons/e/e0/A_view_of_the_Solfatara_volcano.jpg"
    alt="Solfatara volcanic crater in the Campi Flegrei area"
  />
  ) : record["Volcano Name"] === "Chaine des Puys" ? (
  <img
    className="volcano-photo"
    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=960"
    alt="Puy de Dôme in the Chaine des Puys, France"
  />
  ) : record["Volcano Name"] === "Vulsini" ? (
  <img
    className="volcano-photo"
    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=960"
    alt="Landscape with hills"
  />
  ) : record["Volcano Name"] === "Ischia" ? (
  <img
    className="volcano-photo"
    src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=960"
    alt="Coastal town in Italy"
  />
  ) : record["Volcano Name"] === "Calatrava Volcanic Field" ? (
  <img
    className="volcano-photo"
    src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=960"
    alt="Spanish landscape"
  />
  ) : record["Volcano Name"] === "West Eifel Volcanic Field" ? (
  <img
    className="volcano-photo"
    src="https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=960"
    alt="Green volcanic landscape"
  />
  ) : record["Volcano Name"] === "Palinuro" ? (
  <img
    className="volcano-photo"
    src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=960"
    alt="Blue ocean water"
  />
  ) : (
  <div className="volcano-photo-placeholder">
    🌋
  </div>
  )}

      <h2>{record["Volcano Name"]}</h2>

      <button onClick={onToggleFavorite}>
        {favorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
      </button>

      <button onClick={() => setShowDetails(!showDetails)}>
  {showDetails ? 'Hide Details' : 'View Details'}
      </button>

  {showDetails && <VolcanoDetails record={record} />}

      <p>Country: {record.Country}</p>
      <p>Type: {record.Type}</p>
      <p><strong>Elevation:</strong> {record.Elevation} m</p>
    </article>
  )
}

export default RecordCard