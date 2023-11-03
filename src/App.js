import React from "react";
import TrackList from "./components/TrackList";
import "./App.css";
import { MusicPlayerProvider } from "./context/MusicPlayerContext";
import Controller from "./components/Controller";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
