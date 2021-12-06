import { Typography } from '@mui/material'
import React from 'react'

export function Unavailable() {
  return (
    <div>
      <Typography variant="h1">We are shut down</Typography>
      <Typography>Due to breaking changes in Adalo it is no longer possible to install components from our store.</Typography>
      <Typography>We had a good run, it was fun.</Typography>
      <a style={{ color: 'white' }} href="https://forum.adalo.com/t/all-good-things-come-to-an-end/20485">Feel free to show your support for us by clicking here</a>
    </div>
  )
}