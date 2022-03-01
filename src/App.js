import "./App.css";
import {
  Header,
  Footer,
  Main,
  MainPage,
  Page404,
  ServicesMain,
  ServicesPage,
  ServiceApps,
  Services,
  Partners,
  BeforeAfter,
  //News,
  Contact,
  PageAutomatisation,
  PageOutsoursing,
} from "./components/components";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // не было последней версии bootstrap
import About from "./components/pages/about/about";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/services/automatisation"
          element={<PageAutomatisation />}
        />
        <Route path="/services/apps" element={<ServiceApps />} />
        <Route path="/services/outsoursing" element={<PageOutsoursing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
