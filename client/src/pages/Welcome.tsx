import React from 'react'
import { Box, Typography } from '@mui/material'

export function Welcome() {
  return (
    <Box>
      <Typography variant="h1">Welcome</Typography>
      <Typography>Hello from PragmaFlow Inc. and thanks for stopping in. We are always creating new and exciting components and pushing Adalo to its limits and would like to share that with the community.</Typography>
      <Typography>If you have been around the Adalo community for a while, I am confident that you have heard of us and probably have wanted to use one of the components we have built, but alas you were not a developer and you could not get the components to compile and install properly. We have tried to work with Adalo to get these components into the marketplace but that has gone nowhere. Instead we have decided to build our own marketplace that integrates with Adalo.</Typography>
      <Typography>If you feel up to it, and like what we are doing, feel free to click on the "Become a patron" button to support us!</Typography>
      <Typography sx={{ marginTop: 7}}>In the spirit of getting this out to the community ASAP, we focused only on providing the most fundamental site design with little fanfare. We do hope to have a re-design ready within the next few weeks with an improved look and more content, but we are most concern with the functionality of the components with the pretty packaging to come later. Early adopters need functionality, the masses want the wrapping and ribbons that add nothing to its core value. We hope you understand and thank you all for your patience.</Typography>
    </Box>
  )
}