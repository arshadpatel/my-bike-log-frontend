import { RINGS } from "../../../data/data";

function Ring({ id, strokeColor, valueColor, unit, label, value }) {
    return (
        <div className="big-ring">
            <div className="ring-wrap">
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                    <circle id={id} cx="50" cy="50" r="42" fill="none" stroke={strokeColor} strokeWidth="8"
                        strokeLinecap="round" strokeDasharray="0 264" />
                </svg>
                <div className="ring-inner">
                    <div className="ring-val" style={{ color: valueColor }}>{value}</div>
                    <div className="ring-unit">{unit}</div>
                </div>
            </div>
            <div className="ring-label">{label}</div>
        </div>
    );
}

export default function Rings() {
    return (
        <div className="dash-circles">
            {RINGS.map((item) => (
                <Ring key={item.id} {...item} />
            ))}
        </div>
    );
}