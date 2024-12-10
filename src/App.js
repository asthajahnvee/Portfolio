import { Route, Routes} from "react-router-dom";
// import Landingpg from "./components/Landingpg";
import LandingPage from "./Routes/LandingPage";
import Projects from "./Routes/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects/development" element={<Projects projecttype="Development Projects" />} />
        <Route path="/projects/uiux" element={<Projects projecttype="UI/UX Projects" />} />
        <Route path="/projects/art" element={<Projects projecttype="Art Projects" />} />
      </Routes> 
    </>
  );
}
export default App;