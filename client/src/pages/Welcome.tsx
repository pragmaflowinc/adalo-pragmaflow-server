import React from "react";
import { Box, Typography } from "@mui/material";
import { UnmaintainedWarning } from "./WarningReposUnmaintainedimport { MailListSubForm } from "./MailListSubForm";

export function Welcome() {
  return (
    <Box>
      <Typography variant="h1">Happy you came!</Typography>
      <UnmaintainedWarning />

      <Typography>
        Hello from PragmaFlow Inc. We hope this collection of tools is useful. Sadly, many breaking changes have happened since we launched these and so there are several with known issues that we will not be able to invest in fixing.
      </Typography>
      <br />
      <Typography>
        If you feel up to it, and like what we are doing, feel free to click on
        the "Become a patron" button to support us!
      </Typography>
      <br />
      <MailListSubForm />
      <br />
      <Typography>This site's code is on GitHub <Link href="https://github.com/pragmaflowinc/adalo-pragmaflow-server">here</Link> if you want to see how it works, or build your own marketplace.</Typography>

    </Box>
  );
}
