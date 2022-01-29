import { Card, Typography, Box, Button, CardActions, CardContent, CardHeader, Link } from '@mui/material'
import React from 'react'

const Marketplaces = [
  {
    "name": "Complab",
    "website": "https://complab.io/adalo-component-marketplace/",
    "type": "Component Marketplace"
  },
  {
    "name": "NoCode Money",
    "website": "https://www.nocodemonkey.io/store",
    "type": "Component Marketplace"
  },
  {
    "name": "VisualDev Studio",
    "website": "https://visualdev.studio/adalo-custom-components",
    "type": "Component Marketplace"
  },
  {
    "name": "Garlik.io",
    "website": "https://garlik.io/",
    "type": "Services"
  },
  {
    "name": "Adalify",
    "website": "https://www.adalify.com/",
    "type": "Services"
  },
  {
    "name": "Nocode HQ",
    "website": "https://nocodehq.com/templatefortool/adalo-1564823070669x469817807304917000",
    "type": "Templates"
  },
  {
    "name": "Boglex",
    "website": "https://www.boglex.de/shop",
    "type": "Templates"
  }
]

export function OtherMarketplaces() {
  return (
    <div>
      <Typography variant="h1">Other Marketplaces</Typography>
      <Typography>Looking for something we don't offer? Check out these other Adalo sites.</Typography>
      <Typography>Have a marketplace and want to get listed? Send me an email or forum post. Want a marketplace but don't know how to build one? Send me an email or a forum post.</Typography>
      <Typography></Typography>
      <Box sx={{
      display: 'grid',
      gap: 5,
      gridTemplateColumns: "repeat(auto-fill, 350px)",
      flexWrap: 'wrap'
    }}>
      {
        Marketplaces.map((marketplace, idx) => (
          <Card key={idx} sx={{ color: 'black' }}>
            <CardHeader title={marketplace.name} />
            <CardContent sx={{ display: 'grid', justifyItems: 'center' }}>
              <Typography sx={{ marginTop: 1}} color="background">{marketplace.type}</Typography>
              <Link href={marketplace.website} sx={{ marginTop: 1}}>{marketplace.website}</Link>
            </CardContent>
          </Card>
        ))
      }
      </Box>
    </div>
  )
}