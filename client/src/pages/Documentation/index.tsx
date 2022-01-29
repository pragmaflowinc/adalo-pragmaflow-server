import { Typography } from '@mui/material';
import React from 'react'
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { GeoLocationDocs } from './GeoLocation';

export function Documentation() {
  return (
    <div>
      <Typography variant="h1">Component Docs</Typography>
      <Typography variant="subtitle1">Here you will find all the documentation about the components in the marketplace (eventually...)</Typography>
      <ul>
        <li>
          <Link to={'pf-geo-location-steven'} style={{textDecoration:'none'}}>GeoLocation</Link>
        </li>
      </ul>
    </div>
  )
}