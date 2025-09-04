import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./Pages/LandingPage";
import PodcastPage from "./Pages/PodcastPage";
import AddOrEditPodcast from "./Pages/AddOrEditPodcast";
import EpisodesPage from "./Pages/EpisodesPage";
import AddOrEditEpisode from "./Pages/AddOrEditEpisode";
// import TemplatePage from "./Pages/TemplatePage";

function App() {
  return (
    <div className="max-w-[1920px] h-screen overflow-x-hidden bg-primary-muted overflow-y-auto">
      <Navbar />
      <hr className="border-secondary-muted md:mt-15 lg:mt-0" />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/podcast/new" element={<AddOrEditPodcast />} />
        <Route path="/podcast/:id" element={<AddOrEditPodcast />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/episodes/new" element={<AddOrEditEpisode />} />
        <Route path="/episodes/:id" element={<AddOrEditEpisode />} />
        {/* <Route path="/template" element={<TemplatePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
