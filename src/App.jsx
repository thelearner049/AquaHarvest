import Features from "./components/Features.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";
import Workflow from "./components/Workflow.jsx";
import Impact from "./components/Impact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Workflow/>
      <Features/>
      <Impact/>
      <Footer/>
    </>
  );
}

export default App;
