import { OVERALL_DATA } from "../../data/data";

export default function OverallDataCards() {
    return (
        <div className="stats-row">
            {OVERALL_DATA.map((item) => (
                <div className="stat-tile" key={item.id}>
                    <div className="num" id={item.id}>{item.value}</div>
                    <div className="desc">{item.label}</div>
                </div>
            ))}
        </div>
    );
}