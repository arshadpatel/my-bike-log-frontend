import { NAV_MENU } from "../../data/data";

export default function Menu({ activeTab, setActiveTab }) {
    function handleMenu(menuItem) { setActiveTab(menuItem); console.log("Clicked " + menuItem); }
    return (<>
        {
            NAV_MENU.map((menuGroup) => (
                <div key={menuGroup.id} className="nav-group">
                    <div className="nav-label">{menuGroup.label}</div>
                    {menuGroup.items.map((groupItem) => (
                        <div
                            key={groupItem.id}
                            className={`nav-item ${activeTab === groupItem.id ? 'active' : ''}`}
                            onClick={() => handleMenu(groupItem.id)}>
                            <span className="icon">{groupItem.icon}</span> {groupItem.name}
                        </div>
                    ))}
                </div>
            ))
        }
    </>
    );
}
