
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function VolcanoMap({ records }) {
const volcanoesWithCoordinates = records.filter(
    (record) =>
    record.Latitude != null &&
    record.Longitude != null &&
    Number.isFinite(Number(record.Latitude)) &&
    Number.isFinite(Number(record.Longitude))
)

    return (
    <div className="volcano-map">
    <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: '450px', width: '100%' }}
    >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {volcanoesWithCoordinates.map((record) => (
        <Marker
            key={record.id}
            position={[
            Number(record.Latitude),
            Number(record.Longitude),
            ]}
        >
            <Popup>
            <strong>{record['Volcano Name']}</strong>
            <br />
            {record.Country}
            </Popup>
        </Marker>
        ))}
    </MapContainer>
    </div>
)
}

export default VolcanoMap