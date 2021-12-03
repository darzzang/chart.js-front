import VerticalBarChart from './BarChart/VerticalBarChart';
import HorizontalBarChart from './BarChart/HorizontalBarChart'
import StackedBarChart from './BarChart/StackedBarChart';
import StackedBarChartWithGroups from './BarChart/StackedBarChartWithGroups';
import FloatingBarChart from './BarChart/FloatingBarChart';
import BarChartBorderRadius from './BarChart/BarChartBorderRadius';
import LineChart from './LineChart/LineChart';
import Layout from './components/Layout';

function App() {
  const data = [50, 40, 30, 35, 40]
  const labels = [2017, 2018, 2019, 2020, 2021]
  return (
    <Layout>
      <VerticalBarChart data={data} lables={labels}/>
      <HorizontalBarChart data={data} lables={labels}/>
      <LineChart data={data} lables={labels}/>
      <StackedBarChart data={data} lables={labels}/>
      {/* <StackedBarChartWithGroups data={data} lables={labels}/> */}
      <FloatingBarChart data={data} lables={labels}/>
      <BarChartBorderRadius data={data} lables={labels}/>
      <SteppedLineChart data={data} lables={labels}/>
    </Layout>
  );
}

export default App;
