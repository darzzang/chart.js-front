import Chart from "chart.js/auto"
import { useEffect, useRef } from "react"

function FloatingBarChart(props) {
    const { data, labels } = props
    const canvasDom = useRef(null)
    useEffect(() => {
        const ctx = canvasDom.current.getContext('2d')
        const floatingBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        data: data.map(() => {
                            return [100, -100]
                        }),
                        backgroundColor: 'rgba(255, 0, 0, 0.3)',
                        stack: "Group 0"
                    },
                    {
                        data: data.map(() => {
                            return [100, -20]
                        }),
                        backgroundColor: 'rgba(0, 255, 0, 0.3)',
                        stack: "Group 1"
                    },
                    {
                        data: data.map(() => {
                            return [100, -20]
                        }),
                        backgroundColor: 'rgba(0, 0, 255, 0.3)',
                        stack: "Group 2"
                    },
                ]
            },
        })
        return () => {
            floatingBarChart.destroy();
        }
    }, [])
    return (
        <div>
            <canvas ref={canvasDom} />
        </div>
    )
}

export default FloatingBarChart