import "./App.css";
// import Bigcontent from './components/Bigcontent';
import Navbar from "./components/Navbar";
import Bigcontents from "./components/Bigcontents";
import Videosection from "./components/Videosection";
import Entertainmentcontent from "./components/Entertainmentcontent";
import Footer from "./components/Footer";
import Technology from "./components/Technology";
import Society from "./components/Society";
import Sport from "./components/Sport";
import Deal from "./components/Deal";
function App() {
  return (
    <div>
      <Navbar />
      <Bigcontents />
      <Videosection />
      <Entertainmentcontent />
      <Technology/>
      <Society/>
      <Sport/>
      <Deal/>
      <Footer/>
    </div>
  );
}

export default App;
