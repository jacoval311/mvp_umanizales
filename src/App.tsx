/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { AboutView } from './views/AboutView';
import { SectorsView } from './views/SectorsView';
import { ContactView } from './views/ContactView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('inicio');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedSectorId, setSelectedSectorId] = useState<string | undefined>(undefined);

  // Sync hash routing on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = ['inicio', 'servicios', 'nosotros', 'sectores', 'contacto'];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceDetail = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleNavigate('servicios');
  };

  const handleSelectSectorDetail = (sectorId: string) => {
    setSelectedSectorId(sectorId);
    handleNavigate('sectores');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1B2B] font-['Montserrat']">
      {/* Sticky Top Navigation */}
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Content Pages with Sober Smooth Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentRoute === 'inicio' && (
              <HomeView
                onNavigate={handleNavigate}
                onSelectServiceDetail={handleSelectServiceDetail}
                onSelectSectorDetail={handleSelectSectorDetail}
              />
            )}

            {currentRoute === 'servicios' && (
              <ServicesView
                onNavigate={handleNavigate}
                initialServiceId={selectedServiceId}
              />
            )}

            {currentRoute === 'nosotros' && (
              <AboutView onNavigate={handleNavigate} />
            )}

            {currentRoute === 'sectores' && (
              <SectorsView
                onNavigate={handleNavigate}
                initialSectorId={selectedSectorId}
              />
            )}

            {currentRoute === 'contacto' && (
              <ContactView onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Corporate Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
