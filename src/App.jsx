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
        <Route path="/react_II_desafio1/" element={<HomePage />}></Route>
        <Route path="/react_II_desafio1/contacto" element={<ContactPage />}></Route>
        <Route path="/react_II_desafio1/thankyou" element={<ThankYou />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
