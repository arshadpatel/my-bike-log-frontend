import { useState, useEffect } from 'react';

export default function AddBikeForm({ createBike, toggleAddBikeForm }) {
    const [odo, setOdo] = useState(0);
    const [bikeName, setBikeName] = useState("e.g. RE Classic 350");
    const [oil, setOil] = useState(2000);

    useEffect(() => {
        console.log(`${oil} ${bikeName} ${odo}`);
    }, [oil, bikeName, odo]);

    return (
        <div className="add-bike-form" id="add-bike-form">
            <div className="fg">
                <label>Bike name</label>
                <input
                    type="text"
                    id="new-bike-name"
                    value={bikeName}
                    onChange={(e) => setBikeName(e.target.value)}
                />
            </div>
            <div className="fg">
                <label>Initial odometer (km)</label>
                <input
                    type="number"
                    id="new-bike-odo"
                    value={odo}
                    onChange={(e) => setOdo(Number(e.target.value))}
                />
            </div>
            <div className="fg">
                <label>Oil change interval (km)</label>
                <input
                    type="number"
                    id="new-bike-interval"
                    value={oil}
                    onChange={(e) => setOil(Number(e.target.value))}
                />
            </div>
            <div className="add-bike-form-actions">
                <button
                    className="btn btn-accent btn-sm"
                    style={{ flex: 1 }}
                    onClick={createBike}
                >
                    Add bike
                </button>
                <button
                    className="btn btn-ghost btn-sm"
                    onClick={toggleAddBikeForm}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
