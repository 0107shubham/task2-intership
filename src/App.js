import "./App.css";
import Home from "./components/Home";
import TeamStrenth from "./components/TeamStrenth";
import Quality from "./components/Quality";
import Design from "./components/Design";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Watch from "./components/Watch";
import Review from "./components/Review";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
function App() {
  return (
    <div class="bg-black w-full h-screen">
      <Home />
      <TeamStrenth />
      <Quality />
      <Design />
      <Projects />
      <Watch />
      <Pricing />

      <Review />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
