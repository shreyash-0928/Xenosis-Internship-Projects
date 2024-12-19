import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => (
  <div>
    <Line
      data={data}
      options={{ responsive: true, maintainAspectRatio: false }}
    />
  </div>
);

export default LineChart;
