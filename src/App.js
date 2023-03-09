import Background from "./assets/sidebar.jpg";
import Footer from "./components/footer/index";
import Items from "./components/items/index";
import "./styles.css";

export default function App() {
  return (
    <>
      <div
        className="chicken-sidebar"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="App">
        <h1>Uova</h1>
        <Items />
        <Footer />
      </div>
    </>
  );
}
