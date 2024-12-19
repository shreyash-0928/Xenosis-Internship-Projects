import { Pie } from "react-chartjs-2";

const PieChart = ({ data }) => (
  <div>
    <Pie
      data={data}
      options={{ responsive: true, maintainAspectRatio: false }}
    />
  </div>
);

export default PieChart;
