import { Typography } from '@mui/material'
import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe" 

const url = "https://pragmaflow.us20.list-manage.com/subscribe/post?u=e0b0c6210f007d12879685ac3&amp;id=01a6a73410";

export function Unavailable() {
  return (
    <div>
      <Typography variant="h1">We are shut down</Typography>
      <Typography>Due to breaking changes in Adalo it is no longer possible to install components from our store.</Typography>
      <Typography>We had a good run, it was fun.</Typography>
      <a style={{ color: 'white' }} href="https://forum.adalo.com/t/all-good-things-come-to-an-end/20485">Feel free to show your support for us by clicking here</a>
      <Typography>If you want to know if this site comes back online, drop your email in the mailchimp and we will send out a newletter if we start back up.</Typography>
      <MailchimpSubscribe url={url} />

    </div>
  )
}