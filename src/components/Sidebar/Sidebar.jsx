import AddBikeForm from "./AddBikeForm";
import Menu from "./Menu";

export default function Sidebar({ activeTab, setActiveTab }) {
    function onBikeSwitch() { }
    function createBike() { }
    function toggleAddBikeForm() { }
    function deleteBike() { }
    function logout() { }
    const userAvatar = null;
    return (
        <nav className="sidebar">
            <div className="logo">
                <div className="logo-name">🏍️ BikeLog</div>
                <div className="logo-sub" id="sidebar-odo">Loading…</div>
            </div>

            <div className="bike-switcher">
                <div className="bike-switcher-row">
                    <select id="bikeSelector" onChange={onBikeSwitch}></select>
                    <button className="bike-switcher-add" id="add-bike-toggle" onClick={toggleAddBikeForm} title="Add a bike">＋</button>
                    <button className="bike-switcher-add" id="delete-bike-btn" onClick={deleteBike} title="Delete this bike">🗑</button>
                </div>
            </div>

            {/* Add new Bike Details */}
            <AddBikeForm createBike={createBike} toggleAddBikeForm={toggleAddBikeForm} />
            {/* Add Menu on the side bar (vertical navigation) */}
            <Menu activeTab = {activeTab} setActiveTab = {setActiveTab}/>
            

            <div className="sidebar-footer">
                <div className="user-footer">
                    {userAvatar && <img className="user-avatar" id="user-avatar" src={userAvatar} alt="User avatar" />}
                    <div className="user-info">
                        <div className="user-name" id="user-name">—</div>
                        <div className="user-email" id="user-email">—</div>
                    </div>
                </div>
                <button
                    className="btn btn-full"
                    onClick={logout}
                    style={{ justifyContent: 'center' }}
                >
                    Sign out
                </button>

            </div>
        </nav>
    );
}