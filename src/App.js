import "./App.css";
import Artwork from "./components/Artwork/Artwork";
import Collections from "./components/Collections/Collections";
import Editorial from "./components/Editorial/Editorial";
import Events from "./components/Events/Events";
import ExpandingSlider from "./components/ExpandingSlider/ExpandingSlider";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Slider />
        <ExpandingSlider />
        <Artwork />
        <Collections />
        <Editorial />
        <Events />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
