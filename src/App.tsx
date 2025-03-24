import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add additional routes here as needed */}
      </Routes>
    </Suspense>
  );
}

export default App;
