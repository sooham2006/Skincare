import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Toaster } from 'react-hot-toast';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Initial page load animation
    const tl = gsap.timeline({ paused: true });
    
    tl.set('body', { overflow: 'hidden' })
      .to('.loading-screen', {
        opacity: 0,
        duration: 0.8,
        delay: 1.5,
        ease: 'power2.inOut',
      })
      .set('.loading-screen', { display: 'none' })
      .set('body', { overflow: 'auto' })
      .fromTo('.main-content', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

    // Start animation after a short delay
    setTimeout(() => tl.play(), 100);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <LoadingScreen />
        <div className="main-content opacity-0">
          <Header onCartClick={() => setIsCartOpen(true)} />
          <Hero />
          <About />
          <Products />
          <FAQ />
          <Footer />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#10b981',
              color: '#fff',
              fontWeight: '500',
              borderRadius: '12px',
              padding: '16px 20px',
            },
          }}
        />
      </div>
    </CartProvider>
  );
}

export default App;