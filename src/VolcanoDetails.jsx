function VolcanoDetails({ record }) {
  return (
    <div className="volcano-details">
      <h3>Volcano Details</h3>

      <p><strong>Last Known Eruption:</strong> {record["Last Known Eruption"] || "Unknown"}</p>
      <p><strong>Region:</strong> {record.Region || "Unknown"}</p>
      <p><strong>Latitude:</strong> {record.Latitude || "Unknown"}</p>
      <p><strong>Longitude:</strong> {record.Longitude || "Unknown"}</p>
      {record.Latitude && record.Longitude && (
  <p>
    <a
      href={`https://www.google.com/maps?q=${record.Latitude},${record.Longitude}`}
      target="_blank"
      rel="noreferrer"
    >
      View on Google Maps
    </a>
  </p>
)}
      <p><strong>Dominant Rock Type:</strong> {record["Dominant Rock Type"] || "Unknown"}</p>
      <p><strong>Tectonic Setting:</strong> {record["Tectonic Setting"] || "Unknown"}</p>
    </div>
  )
}

export default VolcanoDetails