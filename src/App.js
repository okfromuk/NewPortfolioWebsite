// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import HowICanHelp from './pages/HowICanHelp';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import HowICanHelp from './components/HowICanHelp';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SuccessStories from "./components/SuccessStories";
import FAQs from "./components/FAQs";
import ClientLogos from "./components/ClientLogos";
import ChatBot from "./components/MiniChatBot";
// function App() {
//   return (
//     <Router>
//       <div className="bg-white text-gray-900 font-sans">
//         <Navbar />
//         <main className="min-h-screen pt-20">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/how-i-can-help" element={<HowICanHelp />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

function App() {
  return (
    <>
      <Hero />
      <About />
      <HowICanHelp />
      <Services />
      <SuccessStories />
      <FAQs />
      <ChatBot />
      <Contact />
      <Footer />
    </>
  );
}

export default App;