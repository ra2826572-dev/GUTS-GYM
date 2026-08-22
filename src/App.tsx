/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { AboutSection } from './components/AboutSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ProgramsSection } from './components/ProgramsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { MembershipCTA } from './components/MembershipCTA';
import { LocationHoursSection } from './components/LocationHoursSection';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { JoinModal } from './components/JoinModal';
import { ImageLightbox } from './components/ImageLightbox';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
  });

  const handleOpenJoinModal = () => {
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
  };

  const handleOpenLightbox = (imageSrc: string, title: string) => {
    setLightboxState({
      isOpen: true,
      imageSrc,
      title,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState({
      isOpen: false,
      imageSrc: '',
      title: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-red-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenJoinModal={handleOpenJoinModal} />

        {/* 2. Trust & Stats Section */}
        <StatsStrip />

        {/* 3. Editorial About Section */}
        <AboutSection onOpenJoinModal={handleOpenJoinModal} />

        {/* 4. Why Choose GUTS (6 Feature Cards) */}
        <WhyChooseSection />

        {/* 5. Asymmetric Facilities Showcase */}
        <FacilitiesSection onOpenImageLightbox={handleOpenLightbox} />

        {/* 6. Training Programs with Purpose */}
        <ProgramsSection onOpenJoinModal={handleOpenJoinModal} />

        {/* 7. Gallery with Masonry Grid & Lightbox */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* 8. Google Reviews & Testimonials */}
        <ReviewsSection />

        {/* 9. Full-Width Membership Action Banner */}
        <MembershipCTA onOpenJoinModal={handleOpenJoinModal} />

        {/* 10. Location, Timetable & Embedded Map */}
        <LocationHoursSection />

        {/* 11. Social Community Hub */}
        <SocialSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Action Bar (Call / Directions / Join) */}
      <MobileActionBar onOpenJoinModal={handleOpenJoinModal} />

      {/* Membership Inquiry Modal */}
      <JoinModal isOpen={isJoinModalOpen} onClose={handleCloseJoinModal} />

      {/* Fullscreen Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        imageSrc={lightboxState.imageSrc}
        title={lightboxState.title}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}

