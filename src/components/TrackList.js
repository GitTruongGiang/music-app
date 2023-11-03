import { Box, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import useMusicPlayer from "../hook/useMusicPlayer";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import HeadphonesIcon from "@mui/icons-material/Headphones";

function TrackList() {
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying,
    currentTrackIndex,
  } = useMusicPlayer();

  return (
    <>
      <Box
        component="div"
        sx={{
          height: "66px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "70px 70px 0 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Marquee
          style={{
            position: "absolute",
            top: "0%",
            left: "0px",
            height: "66px",
            borderRadius: " 70px 70px 0 0 ",
          }}
        >
          {currentTrackName}
        </Marquee>
      </Box>
      <div className="tracklist">
        {trackList.map((track, index) => {
          return (
            <div className="list" key={index}>
              <IconButton
                sx={{ padding: "0px" }}
                onClick={() => playTrack(index)}
              >
                {isPlaying && currentTrackIndex === index ? (
                  <HeadphonesIcon sx={{ fontSize: "1.5rem" }} />
                ) : (
                  <PauseCircleOutlineIcon sx={{ fontSize: "1.5rem" }} />
                )}
              </IconButton>
              <div className="song-title">{track.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TrackList;
