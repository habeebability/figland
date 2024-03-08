// import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Content from "./components/Content";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Features />
      <Content />
      <Gallery />
    </div>
  );
}

export default App;
