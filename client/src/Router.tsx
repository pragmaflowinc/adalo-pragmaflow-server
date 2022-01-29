import React from 'react'
import { InstallComponent } from './pages/InstallComponent'
import { Routes, Route, Navigate } from "react-router-dom";
import { Welcome } from './pages/Welcome';
import { YouTube } from './pages/YouTube';
import { GitHub } from './pages/GitHub';
import { TranslationHelper } from './pages/TranslationHelper';
import { OtherMarketplaces } from './pages/OtherMarketplaces';
import { GeoLocationDocs } from './pages/Documentation/GeoLocation';
import { Documentation } from './pages/Documentation';
import { HowTo } from './pages/HowTo';
import { BestPractices } from './pages/BestPractices';
import { WhatAreWeWorkingOn } from './pages/WhatAreWeWorkingOn';
import { OtherTools } from './pages/OtherTools';
import { Compliance } from './pages/Compliance';

function ComponentDocumentsRouter() {
  return (
    <Routes>
      <Route path="pf-geo-location-steven" element={<GeoLocationDocs />} />
      <Route path="" element={<Documentation />} />
      <Route path="*" element={<div>Coming Soon</div>} />
    </Routes>
  )
}

export function Router() {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/youtube" element={<YouTube />} />
      <Route path="/github" element={<GitHub />} /> 
      <Route path="/install-component" element={<InstallComponent />} />
      <Route path="/component-docs/*" element={<ComponentDocumentsRouter />} />
      <Route path="/how-to" element={<HowTo />} />
      <Route path="/other-tools" element={<OtherTools />} />
      <Route path="/best-practices" element={<BestPractices />} />
      <Route path="/compliance" element={<Compliance />} />
      <Route path="/other-marketplaces" element={<OtherMarketplaces />} />
      <Route path="/whats-next" element={<WhatAreWeWorkingOn />} />
      <Route path="/translation-helper" element={<TranslationHelper />} />
      <Route path="*" element={<Navigate to="/welcome" replace />} />
    </Routes>
  )
}