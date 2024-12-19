import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => (
  <div>
    <Bar
      data={data}
      options={{ responsive: true, maintainAspectRatio: false }}
    />
  </div>
);

export default BarChart;
