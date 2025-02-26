import { colors } from "@alyment-testkaique/tokens"

export function ColorsGrid() {
    return Object.entries(colors).map(([key, color]) => {
        return (
            <div key={key}
                style={{ backgroundColor: color, padding: '2rem' }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'monospace',
                    color: color === "#000000" || color === "#151515" ? "#FFF" : "#000"
                }}
                >
                    <strong>${key}</strong>
                    <span>{color}</span>
                </div>
            </div>
        )
    })
}