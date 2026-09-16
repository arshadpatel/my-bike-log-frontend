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

export const FORMS = [
    {
        id: "ride",
        title: "🛣️ Log a ride",
        buttonText: "Add ride",

        fields: [
            {
                name: "date",
                label: "Date",
                type: "date"
            },
            {
                name: "time",
                label: "Time",
                type: "time"
            },
            {
                name: "odometer",
                label: "Odometer reading (km)",
                type: "number",
                placeholder: "e.g. 12540"
            }
        ]
    },
    {
        id: "petrol",
        title: "⛽ Log petrol",
        buttonText: "Add petrol",

        fields: [
            {
                name: "date",
                label: "Date",
                type: "date"
            },
            {
                name: "odometer",
                label: "Current odometer (km)",
                type: "number",
                placeholder: "e.g. 12540"
            },
            {
                name: "amount",
                label: "Amount paid (₹)",
                type: "number",
                placeholder: "e.g. 330"
            },
            {
                name: "pricePerLitre",
                label: "Price per litre (₹/L)",
                type: "number"
            }
        ]
    }
];

export const OVERALL_DATA = [
    {
        id: "ov-km",
        value: "0 km",
        label: "total km tracked"
    },
    {
        id: "ov-litres",
        value: "0 L",
        label: "total petrol used"
    },
    {
        id: "ov-spend",
        value: "₹0",
        label: "total petrol cost"
    },
    {
        id: "ov-avg",
        value: "—",
        label: "overall km/litre"
    },
    {
        id: "ov-max-mileage",
        value: "—",
        label: "best mileage of all time"
    }
];

export const OVERALL_CHARTS = [
    {
        id: "chart-km",
        title: "Km driven per month",
        ariaLabel: "Monthly km driven bar chart",
        dataLabel: "Monthly km data."
    },
    {
        id: "chart-petrol",
        title: "Petrol consumed per month (litres)",
        ariaLabel: "Monthly petrol chart",
        dataLabel: "Monthly petrol data."
    },
    {
        id: "chart-spend",
        title: "Petrol spend per month (₹)",
        ariaLabel: "Monthly spend chart",
        dataLabel: "Monthly spend data."
    }
];