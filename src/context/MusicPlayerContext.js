import React, { createContext, useState } from "react";
import Track1 from "../track/Track-1.mp3";
import Track2 from "../track/Track-2.mp3";
import Track3 from "../track/Track-3.mp3";

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Bật Nhạc Lên - Hiếu Thứ 2",
      file: Track1,
    },
    {
      name: "Tay To - MCK",
      file: Track2,
    },
    {
      name: "Cua - Hiếu Thứ 2",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerContext = createContext({ ...defaultValues });

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
