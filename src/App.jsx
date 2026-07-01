import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Archive from "./components/Archive";
import Studio from "./components/Studio";
import Philosophy from "./components/Philosophy";
import FinalChapter from "./components/FinalChapter";

import ProgressBar from "./components/ProgressBar";
import SmoothScroll from "./components/SmoothScroll";
import Ambience from "./components/Ambience";
import Chapter from "./components/Chapter";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import FloatingParticles from "./components/FloatingParticles";
import CursorTrail from "./components/CursorTrail";

import ResumePage from "./pages/ResumePage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";

import AwaitingCreation from "./pages/archive/AwaitingCreation";
import InDevelopment from "./pages/archive/InDevelopment";
import UnknownPossibilities from "./pages/archive/UnknownPossibilities";

import Toolbox from "./pages/studio/Toolbox";
import Experiments from "./pages/studio/Experiments";
import Process from "./pages/studio/Process";

function HomePage() {
return ( <main className="bg-[#120F18] text-white overflow-hidden"> <Navbar />

  <CursorGlow />
  <CursorTrail />
  <FloatingParticles />

  <ProgressBar />
  <SmoothScroll />
  <Ambience />

  <Hero />

  <Chapter text="Everything begins with curiosity." />
  <Chapter text="Curiosity becomes imagination." />
  <Chapter text="Imagination becomes creation." />
  <Chapter text="Creation becomes expression." />
  <Chapter text="Expression becomes a story." />
  <Chapter text="Welcome to the story." />

  <Journey />
  <Archive />
  <Studio />
  <Philosophy />
  <FinalChapter />
</main>

);
}

function App() {
return ( <BrowserRouter basename="/Portfolio"> <Routes>

    {/* Homepage */}
    <Route path="/" element={<HomePage />} />

    {/* Navigation Pages */}
    <Route path="/resume" element={<ResumePage />} />
    <Route path="/work" element={<WorkPage />} />
    <Route path="/contact" element={<ContactPage />} />

    {/* Archive */}
    <Route
      path="/archive/awaiting-creation"
      element={<AwaitingCreation />}
    />

    <Route
      path="/archive/in-development"
      element={<InDevelopment />}
    />

    <Route
      path="/archive/unknown-possibilities"
      element={<UnknownPossibilities />}
    />

    {/* Studio */}
    <Route
      path="/studio/toolbox"
      element={<Toolbox />}
    />

    <Route
      path="/studio/experiments"
      element={<Experiments />}
    />

    <Route
      path="/studio/process"
      element={<Process />}
    />

  </Routes>
</BrowserRouter>

);
}

export default App;
