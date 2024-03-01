import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/nav";
import ShowItems from "./components/showItems";
import AddItems from "./components/addItem";
import Classification from "./components/classification";
import Footer from "./components/footer";
import "./App.css";

function App() {
  // Set up state to manage the list of items
  const [items, setItems] = useState([]);

  return (
    // Set up the router
    <Router>
      <div className="App">
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ShowItems />}  />
            <Route path="/items/*" element={<ShowItems />} />
            <Route
              path="/importants/*"
              element={<AddItems items={items} setItems={setItems} />}
            />
            <Route path="/classifications/:classification" element={<Classification />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;