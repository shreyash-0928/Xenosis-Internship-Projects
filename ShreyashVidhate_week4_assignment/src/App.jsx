// App.jsx
import MainPage from "./pages/MainPage";
import JobInfoPage from "./pages/JobInfoPage";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/job-info" element={<JobInfoPage />} />
    </Routes>  
  );
}

export default App;
