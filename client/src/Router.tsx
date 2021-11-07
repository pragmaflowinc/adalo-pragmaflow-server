import React from 'react'
import { InstallComponent } from './pages/InstallComponent'
import { Routes, Route } from "react-router-dom";
import { Welcome } from './pages/Welcome';
import { YouTube } from './pages/YouTube';
import { GitHub } from './pages/GitHub';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/youtube" element={<YouTube />} />
      <Route path="/github" element={<GitHub />} />
      <Route path="/install-component" element={<InstallComponent />} />
    </Routes>
  )
}