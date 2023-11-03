import { Box, IconButton } from "@mui/material";
import React from "react";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import useMusicPlayer from "../hook/useMusicPlayer";

function Controller() {
  const {
    playNextTrack,
    playPreviousTrack,
    playTrack,
    currentTrackIndex,
    currentTrackName,
    isPlaying,
  } = useMusicPlayer();

  return (
    <Box
      component="div"
      sx={{
        height: "66px",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "0 0 70px 70px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <IconButton
          sx={{
            color: currentTrackName ? "" : "rgba(0, 0, 0, 0.26)",
            ":focus-within": currentTrackName ? "" : { pointerEvents: "none" },
          }}
          onClick={() => playPreviousTrack()}
        >
          <SkipPreviousIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
        <IconButton
          onClick={() => {
            playTrack(currentTrackIndex);
          }}
        >
          {isPlaying ? (
            <PauseCircleOutlineIcon
              sx={{
                fontSize: "3rem",
                color: currentTrackName ? "" : "rgba(0, 0, 0, 0.26)",
              }}
            />
          ) : (
            <PlayCircleFilledWhiteIcon
              sx={{
                fontSize: "3rem",
                color: currentTrackName ? "" : "rgba(0, 0, 0, 0.26)",
              }}
            />
          )}
        </IconButton>
        <IconButton
          sx={{
            color: currentTrackName ? "" : "rgba(0, 0, 0, 0.26)",
            ":focus-within": currentTrackName ? "" : { pointerEvents: "none" },
          }}
          onClick={() => playNextTrack()}
        >
          <SkipNextIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Controller;
