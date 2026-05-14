import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Hero, TrustBanner, BentoGrid, CTASection, CoreSection } from './pages/Home';
import { Products, ProfessionalServices, About, Contact } from './components/Pages';
import { CaseStudies } from './pages/CaseStudies';
import { NotFound } from './pages/NotFound';
import { PrivacyPolicy, TermsOfService } from './pages/Legal';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { OutcomesSection } from './components/OutcomesSection';
import { ProcessSection } from './components/ProcessSection';
import { LogoBar } from './components/LogoBar';
import { ProductShowcase } from './components/ProductShowcase';
import { WhyCeloxus } from './components/WhyCeloxus';
import { Testimonials } from './components/Testimonials';
import { CaseStudiesPreview } from './components/CaseStudiesPreview';
import { SecuritySection } from './components/SecuritySection';
import { IndustriesGrid } from './components/IndustriesGrid';
import { FAQ } from './components/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <LogoBar />
      <TrustBanner />
      <CoreSection />
      <OutcomesSection />
      <ProductShowcase />
      <BentoGrid />
      <ProcessSection />
      <WhyCeloxus />
      <Testimonials />
      <CaseStudiesPreview />
      <IndustriesGrid />
      <SecuritySection />
      <FAQ />
      <CTASection />
    </>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <CustomCursor />
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="services" element={<ProfessionalServices />} />
              <Route path="about" element={<About />} />
              <Route path="case-studies" element={<CaseStudies />} />
              <Route path="contact" element={<Contact />} />
              <Route path="legal/privacy" element={<PrivacyPolicy />} />
              <Route path="legal/terms" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </HelmetProvider>
  );
}
