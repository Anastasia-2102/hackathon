import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function VolcanoMap() {
    return (
    <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '450px', width: '100%' }}
    >
        <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy; OpenStreetMap contributors"
    />
    </MapContainer>
)}

export default VolcanoMap