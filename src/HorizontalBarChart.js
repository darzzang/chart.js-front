import { Chart } from "chart.js"
import { useEffect, useRef } from "react"

function HorizontalBarChart() {
    const canvasDom = useRef(null)
    useEffect(() => {
        const ctx = canvasDom.current.getContext('2d')
        const HorizontalBarChart = new Chart(ctx, {})
        return () => {
            HorizontalBarChart.destroy();
        }
    }, [])
    return (
        <div>
            <canvas/>
        </div>
    )
}