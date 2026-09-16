import Rings from "./Rings";
import BikeDataCards from "./BikeDataCards";
import LogRidePetrol from "./LogRidePetrol";

export default function MonthlyDashboard(){
    function renderDashboard(){}
    
    return (
        <div className="panel active" id="panel-dashboard">
        <div className="page-header">
          <div className="page-title">Monthly Overview</div>
          <div className="page-sub" id="dash-sub">Your riding stats for this month</div>
        </div>

        <div id="oil-banner-dash"></div>

        <div className="month-row">
          <span style={{ fontSize: 13, color: 'var(--text2)' }}>Month</span>
          <select id="monthSelector" onChange={renderDashboard}></select>
        </div>
        <Rings/>
        <BikeDataCards/>
        <LogRidePetrol/>

        {/* Quick add forms */}
        
      </div>
    );
}