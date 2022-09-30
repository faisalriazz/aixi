import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.scss";
import Carousel from "./Components/Carousel/Carousel";
import OurTech from "./Components/OurTech/OurTech";
import WorkWith from "./Components/WorkWith/WorkWith";

function App() {
  return (
    <div>
      <Carousel />
      <OurTech />
      <WorkWith />
    </div>
  );
}

export default App;
