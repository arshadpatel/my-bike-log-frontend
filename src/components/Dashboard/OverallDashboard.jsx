import OverallChart from "./OverallChart";
import OverallDataCards from "./OverallDataCards";

export default function OverallDashboard() {
    return (
        <div className="panel active" id="panel-overall">
            <div className="page-header">
                <div className="page-title">Overall Stats</div>
                <div className="page-sub">All-time performance across every month</div>
            </div>
            <OverallDataCards />
            <OverallChart />
        </div>
    );
}