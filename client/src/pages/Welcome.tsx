import React from "react";
import { Box, Typography } from "@mui/material";
import { UnmaintainedWarning } from "./warning-repos-unmaintained";

export function Welcome() {
  return (
    <Box>
      <Typography variant="h1">Happy you came!</Typography>
      <UnmaintainedWarning />
      <br />
      <Typography>
        Hello from PragmaFlow Inc. and thanks for stopping in. It was a little
        touch an go for awhile there when we started getting off the ground. A
        couple of shut-downs, an uncertain future, but thanks to community
        support and some vocal activists we are back online, seemingly for good.
      </Typography>
      <br />
      <br />
      <Typography>
        If you feel up to it, and like what we are doing, feel free to click on
        the "Become a patron" button to support us!
      </Typography>
    </Box>
  );
}
