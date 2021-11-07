import React from 'react'
import { Box, Typography } from '@mui/material'

export function Welcome() {
  return (
    <Box>
      <Typography variant="h1">Welcome</Typography>
      <Typography>Hello from PragmaFlow and thanks for stopping in. We are always creating new and exciting components and pushing Adalo to the limits and would like to share that with the community.</Typography>
      <Typography>If you have been around the Adalo community for awhile I am sure that you have heard of us and probably have wanted to use one of the components we have built, but alas you are not a developer and you cannot get the components to compile and install properly. We have tried to work with Adalo to get the components into the marketplace but that has gone nowhere. Instead we have decided to build our own marketplace that integrates with Adalo.</Typography>
      <Typography>If you feel up for it, and like what we are doing, feel free to click on the "Become a patron" to support us!</Typography>
      <Typography sx={{ marginTop: 7}}>In the spirit of getting this out to the community ASAP, the site is a little crappy and not much to it right now, we will work on getting this better and full of content in the next few weeks!</Typography>
    </Box>
  )
}