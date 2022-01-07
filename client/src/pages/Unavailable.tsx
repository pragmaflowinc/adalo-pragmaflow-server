import { Typography } from '@mui/material'
import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe" 

const url = "https://pragmaflow.us20.list-manage.com/subscribe/post?u=e0b0c6210f007d12879685ac3&amp;id=01a6a73410";

export function Unavailable() {
  return (
    <div>
      <Typography variant="h1">We are down again</Typography>
      <Typography>Another breaking change has taken our marketplace out of commission.</Typography>
      <Typography>We will be back again soon I hope.</Typography>
      <a style={{ color: 'white' }} href="https://forum.adalo.com/t/all-good-things-come-to-an-end/20485">I guess it is time to get this thread going again, feel free to show your support again.</a>
      <Typography>Signup to mailchimp to stay informed.</Typography>
      <MailchimpSubscribe url={url} />

    </div>
  )
}