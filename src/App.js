import "./App.css";
import MainRoutes from "./Routes/MainRoutes";
import { BrowserRouter as Router } from "react-router-dom";
// import { Route, Routes } from “react-router-dom”;

function App() {
  return (
    <div>
      <Router>
        <MainRoutes />
      </Router>
    </div>
  );
}

export default App;
