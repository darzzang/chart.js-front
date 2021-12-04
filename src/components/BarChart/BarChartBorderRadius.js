
import React, { useRef, useEffect } from 'react';
// import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables);
import Chart from 'chart.js/auto';

function BarChartBorderRadius(props) {
  const { data, labels } = props;
  const canvasDom = useRef(null);
  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const barChartBorderRadius = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            labels: labels,
            data: data,
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            borderRadius: 10,
            borderSkipped: false,
          },
          {
            labels: labels,
            data: data,
            backgroundColor: "rgba(0, 255, 0, 0.3)"
          },
          {
            labels: labels,
            data: data,
            backgroundColor: "rgba(0, 0, 255, 0.3)"
          },
        ]
      },
    });
    return () => {
        barChartBorderRadius.destroy();
    };
  }, []);
  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default BarChartBorderRadius;