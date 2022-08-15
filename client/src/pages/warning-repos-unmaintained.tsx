import React from 'react'
import { Box, Typography } from '@mui/material'

export function UnmaintainedWarning() {
  return(
    <Box>
        <Typography variant="h3" color="red">
            Please note that our Adalo components are NOT actively maintained by our
            team, they are open source. To avoid work-waste, before installing a
            component, check the github repo for known issues. <br />
        </Typography>
    </Box>
  )
}