import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import Routers from "./components/header/Routers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routers />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
