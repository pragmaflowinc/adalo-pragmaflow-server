import React from 'react'
import { Box, Typography } from '@mui/material'

export function UnmaintainedWarning() {
  return(
    <Box>
        <Typography variant="h3" color="red">
            Please note that our Adalo components are NO LONGER actively maintained by our
            team; they are open source.<br />
            To avoid work-waste, before installing a component, check it's github repo for known issues. <br />
        </Typography>
    </Box>
  )
}