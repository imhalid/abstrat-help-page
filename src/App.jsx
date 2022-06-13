import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div className="layout">
      <Header />
      <Search />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
