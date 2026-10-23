import RecordCard from './RecordCard.jsx'

function VolcanoList({ records, favorites, onToggleFavorite }) {
    if (records.length === 0) {
    return <p>No volcanoes found. Try another name.</p>
    }

    return (
    <div className="volcano-grid">
    {records.map((record) => (
        <RecordCard
        key={record.id}
        record={record}
        favorite={favorites.some((item) => item.id === record.id)}
        onToggleFavorite={() => onToggleFavorite(record)}
        />
    ))}
    </div>
)
}

export default VolcanoList