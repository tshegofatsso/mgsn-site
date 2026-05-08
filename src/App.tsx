import { BrowserRouter, Route, Routes } from "react-router-dom";
import MGSNHomepage from "./pages/mgsn-homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MGSNHomepage />} />
      </Routes>
    </BrowserRouter>
  );
}
