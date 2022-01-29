import React from "react";
import { Box, Typography } from "@mui/material";
import { useGetHowToVimeoVideosQuery } from "../generated/graphql";
export function HowTo() {
  const { data: howToData } = useGetHowToVimeoVideosQuery();
  return (
    <div>
      <Typography variant="h1">Video How Tos</Typography>
      <Typography>From time to time I make quick screen recordings to demonstrate how to accomplish certain tasks. I find it easier to show a step-by-step video instead of trying to write out an explanation.</Typography>
      <Typography>I use Vimeo to share the videos rather than YouTube and I have decided to curate the videos here.</Typography>
      {howToData &&
        howToData.getHowToVimeoVideos.map((video) => (
          <Box key={video.id}>
            <Typography variant="h2">{video.title}</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: "auto 1fr", gap: '2em'}}>
          <iframe
            
            src={`https://player.vimeo.com/video/${video.videoUrl}?h=2b6cbe50b6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            width="340"
            height="240"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            
            title="Custom Search Engine in Adalo using Xano"
          ></iframe>
          <Typography>{video.description}</Typography>
          </Box>
          </Box>
        ))}
    </div>
  );
}