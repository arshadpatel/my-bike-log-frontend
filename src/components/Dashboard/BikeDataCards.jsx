import { BIKE_DATA_CARDS } from "../../data/data";

function SmallCard({ id, value, valueColor, label }) {
    return (
        <div className="small-card">
            <div className="sc-val" style={{ color: valueColor }}>{value}</div>
            <div className="sc-lbl">{label}</div>
        </div>);
}

export default function BikeDataCards() {
    return (
        <div className="small-rings">
            {BIKE_DATA_CARDS.map((item) => (
                <SmallCard key={item.id} {...item} />
            ))}
        </div>
    );
}