import logo from "./logo.svg";
import "./App.css";

/*DATA*/
import listLinkData from "./components/listLinkData";
/*COMPONENTS*/
import Header from "./components/Header.component";
import Hero from "./components/Hero.component";

function App() {
  return (
    <div className="container">
      <Header data={listLinkData} />
      <Hero />
    </div>
  );
}

export default App;
