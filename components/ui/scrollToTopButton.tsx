'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when scroll > 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label='Scroll to top'
      className={`bg-primary-200 fixed right-8 bottom-8 z-99 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-black shadow-[0_0_20px_rgba(163,230,53,0.5)] transition-all hover:shadow-[0_0_30px_rgba(163,230,53,0.7)] ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'} `}
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default ScrollToTopButton;
