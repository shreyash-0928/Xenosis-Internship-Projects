import "../../styles/dashboard.css";

const Metrics = ({ title, value }) => (
  <div className="metric">
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

export default Metrics;
