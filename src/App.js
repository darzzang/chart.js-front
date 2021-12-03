import React, { useRef, useEffect } from 'react';
// import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables);
import Chart from 'chart.js/auto';
import VerticalBarChart from './VerticalBarChart';

function App() {
  
  return (
    <div>
      <VerticalBarChart/>
    </div>
  );
}

export default App;
