import "./App.css";
import Artwork from "./components/Artwork/Artwork";
import ExpandingSlider from "./components/ExpandingSlider/ExpandingSlider";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Slider />
        <ExpandingSlider />
        <Artwork />
      </div>
    </div>
  );
}

export default App;
