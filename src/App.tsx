import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Incidents from './pages/Incidents';
import Locations from './pages/Locations';
import MiniChat from './components/MiniChat';
import ManageIncidents from './pages/ManageIncidents';
import Started from './pages/Started';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path='/incidents/Manage-Incidents' element={<ManageIncidents />} />
        <Route path="/locations" element={<Locations />} />
        <Route path='/incidents/new-incident/started' element={<Started />} />
      </Routes>

      {/* Chat Toggle */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={toggleChat}
          className="p-2 rounded-full shadow-lg bg-white hover:bg-gray-100 focus:outline-none"
        >
          <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="38.5" cy="38.5" r="38.5" fill="#F26922" />
            <path d="M37.8192 58.552C34.912 58.552 32.6856 57.724 31.14 56.068C29.6312 54.412 28.8768 52.0752 28.8768 49.0576V28.3024C28.8768 25.2848 29.6312 22.948 31.14 21.292C32.6856 19.636 34.912 18.808 37.8192 18.808C40.7264 18.808 42.9344 19.636 44.4432 21.292C45.9888 22.948 46.7616 25.2848 46.7616 28.3024V32.3872H41.0208V27.916C41.0208 25.524 40.0088 24.328 37.9848 24.328C35.9608 24.328 34.9488 25.524 34.9488 27.916V49.4992C34.9488 51.8544 35.9608 53.032 37.9848 53.032C40.0088 53.032 41.0208 51.8544 41.0208 49.4992V43.5928H46.7616V49.0576C46.7616 52.0752 45.9888 54.412 44.4432 56.068C42.9344 57.724 40.7264 58.552 37.8192 58.552Z" fill="white" />
          </svg>
        </button>
      </div>

      {/* Mini Chat */}
      {isChatOpen && <MiniChat toggleChat={toggleChat} />}
    </div>
  );
};

export default App;