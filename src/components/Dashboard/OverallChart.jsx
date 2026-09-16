import { OVERALL_CHARTS } from "../../data/data";

export default function OverallChart() {
    return (
        <div className="charts-grid">
            {OVERALL_CHARTS.map(item => (
                <div className="card" key={item.id}>
                    <div className="card-title">{item.title}</div>
                    <div className="chart-wrap" style={{ height: 200 }}><canvas id={item.id} role="img"
                        aria-label={item.ariaLabel}>{item.dataLabel}</canvas></div>
                </div>
            ))}
        </div>
    );
}