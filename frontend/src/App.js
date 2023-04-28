import { Route, Routes } from "react-router-dom";

import "./App.css";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
      </Routes>
    </div>
  );
}

export default App;
