import React from 'react'
import { Box, Typography } from '@mui/material'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://pragmaflow.us20.list-manage.com/subscribe/post?u=e0b0c6210f007d12879685ac3&amp;id=01a6a73410";

export function MailListSubForm() {
  return(
    <Box>
        
        <Typography>If you want to stay up to date with changes and additions to this site, leave us your email. This is a mailchimp form so you need to go through the mailchimp process.</Typography>
      <MailchimpSubscribe url={url} />
    </Box>
  )
}