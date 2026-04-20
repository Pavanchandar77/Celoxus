import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero, TrustBanner, BentoGrid, SplitMission, CTASection } from './pages/Home';
import { Products, ProfessionalServices, About, Contact } from './components/Pages';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBanner />
      <BentoGrid />
      <SplitMission />
      <CTASection />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<ProfessionalServices />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
