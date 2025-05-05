import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import '../src/Components/App.css';
import "@fontsource/roboto";
import './App.css'; 
import Home from './Components/Home.jsx'; 
import MasterClass3 from './Components/MasterClass3';
import About from './Components/About'; 
import GAX from './Components/GAX'; 
import Blogs from './Components/Blogs'; 
import Footer from './Components/Footer'; 
import Navbar from './Components/Navbar'; 
import Placement from './Components/Placement'; 
import Contact from './Components/Contact'; 
import Training from './Components/Training';
import BrandPositioning from './Components/BrandPositioning'; // Import the page
import CollegeTraining from './Components/CollegeTraining';
import CorporateTraining from './Components/CorporateTraining';
import FacultyTraining from './Components/FacultyTraining'; 
import WhatsAppWidget from './Components/WhatsAppWidget'; 
import ScrollToTopButton from './Components/ScrollToTopButton'; 
import Post1 from './Components/BlogPages/Post1';
import Post2 from './Components/BlogPages/Post2';
import Post3 from './Components/BlogPages/Post3';
import Post4 from './Components/BlogPages/Post4';
import Post5 from './Components/BlogPages/Post5';
import Post6 from './Components/BlogPages/Post6';
import NotFound from './Components/NotFound'; // Import the NotFound component
import DecEvent from './Components/DecEvent'; // Import the DecEvent component
import DecEventGroundZero from './Components/DecEventGroundZero'; // Import the Ground Zero page component
import Loader from './Components/Loader'; // Import the loader component
import DecEventAgenda from './Components/DecEventAgenda'; // Import the DecEventAgenda component
import DigitalMark from './Components/DigitalMark';
import DmLoader from './Components/DigitalMarketing/DmLoader';

function App() {
  const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [dmloaderFinished, setDmLoaderFinished] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.endsWith('/') && location.pathname !== '/') {
      navigate(location.pathname.slice(0, -1), { replace: true });
    }
  }, [location, navigate]);

  const handleLoaderFinish = () => {
    setLoaderFinished(true);
  };

  const handleDmLoaderFinish = () => {
    setDmLoaderFinished(true);
  };

  // Dynamically set the page title based on the route
  useEffect(() => {
    const baseTitle = "Gryphon Academy | Bridging the Gap Between Industry and Academia";
    let pageTitle = "";

    switch (location.pathname) {
      case "/":
        pageTitle = "Home";
        break;
      case "/masterclass3":
        pageTitle = "Masterclass 3.0";
        break;
      // Add other cases...
      default:
        pageTitle = "Page Not Found";
    }

    document.title = `${pageTitle} | ${baseTitle}`;

    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollVisible(window.scrollY > window.innerHeight * 1.2);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/brandPositioning') {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowWhatsAppWidget(true);
        } else {
          setShowWhatsAppWidget(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<><Navbar /><DecEventAgenda /></>} />
        <Route path="/ground-zero" element={<DecEventGroundZero />} />
        <Route path="/about-us" element={<><Navbar /><About /></>} />
        <Route path="/gax" element={<><Navbar /><GAX /></>} />
        <Route path="/masterclass3" element={<MasterClass3 />} />
        <Route path="/blogs" element={<><Navbar /><Blogs /></>} />
        <Route path="/placement" element={<><Navbar /><Placement /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/brandPositioning" element={<><Navbar /><BrandPositioning /></>} />
        <Route path="/training" element={<><Navbar /><Training /></>} />
        
        <Route path="/events" element={
          <>
            {!loaderFinished ? (
              <Loader onFinish={handleLoaderFinish} />
            ) : (
              <>
                <Navbar />
                <DecEvent />
              </>
            )}
          </>
        } />
        
        <Route path="/digital-marketing" element={
          <>
            {!dmloaderFinished ? (
              <DmLoader onFinish={handleDmLoaderFinish} />
            ) : (
              <>
                <Navbar />
                <DigitalMark />
              </>
            )}
          </>
        } />
        
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Conditionally render Footer based on loaders' completion */}
      {!(
          (location.pathname === "/events" && !loaderFinished) ||
          (location.pathname === "/digital-marketing" && !dmloaderFinished)
        ) && <Footer />}

      
      {showWhatsAppWidget && (<WhatsAppWidget />)}
      <ScrollToTopButton visible={scrollVisible} />
    </>
  );
}


function AppWrapper() {
  return (
    <Router basename="/">
      <App />
    </Router>
  );
}

export default AppWrapper;
