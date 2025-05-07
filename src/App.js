import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import * as microsoftTeams from "@microsoft/teams-js";
import { useEffect, useState } from "react";

function App() {
  const [context, setContext] = useState(null);

  useEffect(() => {
    microsoftTeams.app
      .initialize()
      .then(() => {
        console.log("Teams SDK initialized");
        microsoftTeams.app.getContext().then((context) => {
          setContext(context);
          console.log("Teams Context:", context);
        });
      })
      .catch((error) => {
        console.error("Error initializing Teams SDK:", error);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
