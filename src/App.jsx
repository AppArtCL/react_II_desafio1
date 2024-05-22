import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import HomePage from "./views/HomePage";
import ContactPage from "./views/ContactPage";
import NotFound from "./views/NotFound";
import ThankYou from "./views/ThankYou";

import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contacto" element={<ContactPage />}></Route>
        <Route path="/thankyou" element={<ThankYou />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
