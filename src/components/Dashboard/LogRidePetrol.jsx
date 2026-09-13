export default function LogRidePetrol(){
    return (
        <div className="form-grid">
          <div className="form-card">
            <h3>🛣️ Log a ride</h3>
            <div className="fg"><label>Date</label><input type="date" id="ride-date"/></div>
            <div className="fg"><label>Time</label><input type="time" id="ride-time"/></div>
            <div className="fg">
              <label>Odometer reading (km)</label>
              <input type="number" id="ride-odo" placeholder="e.g. 12540"/>
              <div className="hint" id="ride-hint"></div>
            </div>
            <button className="btn btn-accent btn-full" onClick={() => console.log("Ride added")}>Add ride</button>
          </div>

          <div className="form-card">
            <h3>⛽ Log petrol</h3>
            <div className="fg"><label>Date</label><input type="date" id="petrol-date"/></div>
            <div className="fg"><label>Current odometer (km)</label><input type="number" id="petrol-odo"
                placeholder="e.g. 12540"/></div>
            <div className="fg">
              <label>Amount paid (₹)</label>
              <input type="number" id="petrol-amount" placeholder="e.g. 330" onInput={() => {}}/>
              <div className="hint" id="petrol-calc-hint"></div>
            </div>
            <div className="fg">
              <label>Price per litre (₹/L)</label>
              <input type="number" id="petrol-price" value="115.81" onChange={()=> {}}/>
            </div>
            <button className="btn btn-accent btn-full" onClick={() => console.log("Petrol added")}>Add petrol</button>
          </div>
        </div>
    );
}