import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./router";

const App = () => (
  <Router>
    <Navbar />
    <AppRouter />
  </Router>
);

export default App;
