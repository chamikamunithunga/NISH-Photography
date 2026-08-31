import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Services from './components/Services';
import Approach from './components/Approach';
import ExperienceTimeline from './components/ExperienceTimeline';
import BehindTheLens from './components/BehindTheLens';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [bookingCategory, setBookingCategory] = useState('');
  const [inquireItem, setInquireItem] = useState(null);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    setBookingCategory('');
    setInquireItem(null);
    scrollToContact();
  };

  const handleSelectService = (categoryName) => {
    setBookingCategory(categoryName);
    setInquireItem(null);
    scrollToContact();
  };

  const handleInquireItem = (item) => {
    setInquireItem(item);
    setBookingCategory('');
    scrollToContact();
  };

  return (
    <div className="bg-obsidian-950 text-stark-100 min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Content */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <SelectedWork onInquireItem={handleInquireItem} />
        <Services onSelectService={handleSelectService} />
        <Approach />
        <ExperienceTimeline />
        <BehindTheLens />
        <ContactSection selectedCategory={bookingCategory} initialItem={inquireItem} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
