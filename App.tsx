import { HashRouter, Route, Routes } from "react-router-dom";
import MGSNHomepage from "./pages/mgsn-homepage";
import VolunteerRegistration from "./pages/volunteer-registration";
import CampaignApp from "./pages/campaign";
import GovernanceDashboard from "./pages/governance";
import MeetingDashboard from "./pages/meeting";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MGSNHomepage />} />
        <Route path="/volunteer" element={<VolunteerRegistration />} />
        <Route path="/campaign" element={<CampaignApp />} />
        <Route path="/governance" element={<GovernanceDashboard />} />
        <Route path="/meeting" element={<MeetingDashboard />} />
      </Routes>
    </HashRouter>
  );
}