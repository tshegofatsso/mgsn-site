import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarketingDemo from "./pages/marketing-demo";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MarketingDemo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
