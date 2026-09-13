export const NAV_MENU = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        items: [
            { id: 'monthly', name: 'Monthly', icon: '📊' },
            { id: 'overall', name: 'Overall', icon: '📈' }
        ]
    },
    {
        id: 'track',
        label: 'Track',
        items: [
            { id: 'ride-history', name: 'Ride History', icon: '🛣️' },
            { id: 'petrol', name: 'Petrol', icon: '⛽' }
        ]
    },
    {
        id: 'maintenance',
        label: 'Maintenance',
        items: [
            { id: 'engine-oil', name: 'Engine Oil', icon: '🔧' },
            { id: 'tyre-pressure', name: 'Tyre Pressure', icon: '🔵' },
            { id: 'service-history', name: 'Service History', icon: '🛠️' }
        ]
    }
];

export const RINGS = [
    {
        id: "ring-km-arc",
        strokeColor: "#4a9eff",
        valueColor: "var(--blue)",
        unit: "km",
        label: "Driven this month",
    },
    {
        id: "ring-petrol-arc",
        strokeColor: "#f0b429",
        valueColor: "var(--yellow)",
        unit: "litres",
        label: "Petrol this month",
    }
];

export const BIKE_DATA_CARDS = [
    {
        id: "mon-current-mileage",
        value: "—",
        valueColor: "var(--green)",
        label: "current mileage (km/L)",
    },
    {
        id: "mon-max-mileage",
        value: "—",
        valueColor: "var(--green)",
        label: "best mileage (km/L)",
    },
    {
        id: "mon-spend",
        value: "₹0",
        label: "petrol spend",
    },
    {
        id: "mon-days",
        value: "0",
        label: "riding days",
    },
    {
        id: "mon-rides",
        value: "0",
        label: "total rides",
    },
    {
        id: "total-odo",
        value: "0",
        label: "odometer (km)",
    },
];
