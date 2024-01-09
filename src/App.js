import logo from "./logo.svg";
import "./App.css";
import { AppRoutes } from "./components/AppRoutes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
