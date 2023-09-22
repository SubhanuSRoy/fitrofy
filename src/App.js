import './App.css';
import Clients from './components/Clients/Clients';
import FAQ from './components/FAQ/FAQ';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Hero/HeroSection';
import Metrics from './components/Metrics/Metrics';
import Navbar from './components/Navbar/Navbar';
import OneLiner from './components/OneLiner/OneLiner';
import Pricing from './components/Pricing/Pricing';
import Secure from './components/Secure/Secure';
import TechIntegration from './components/TechIntegration/TechIntegration';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="bg-gradient-to-b from-white via-purple-100 to-purple-200 min-h-screen max-w-screen">
      <Navbar />
      <HeroSection />
      <OneLiner />
      <Features />
      <Metrics />
      <TechIntegration />
      <Secure />
      <Testimonials />
      <Clients />
      <Pricing />
      <FAQ />
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
}

export default App;
