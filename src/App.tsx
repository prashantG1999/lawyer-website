import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import CivilLaw from './pages/practice-areas/CivilLaw.tsx';
import CriminalLaw from './pages/practice-areas/CriminalLaw.tsx';
import FamilyLaw from './pages/practice-areas/FamilyLaw.tsx';
import PersonalLaw from './pages/practice-areas/PersonalLaw.tsx';
import RevenueLaw from './pages/practice-areas/RevenueLaw.tsx';
import OtherLegalServices from './pages/practice-areas/OtherLegalServices.tsx';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/civil-law" element={<CivilLaw />} />
            <Route path="/services/criminal-law" element={<CriminalLaw />} />
            <Route path="/services/family-law" element={<FamilyLaw />} />
            <Route path="/services/personal-law" element={<PersonalLaw />} />
            <Route path="/services/revenue-law" element={<RevenueLaw />} />
            <Route path="/services/other-legal-services" element={<OtherLegalServices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
};

export default App;
