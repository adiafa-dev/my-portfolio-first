import Contact from './home/partials/contact';
import AboutMe from './home/partials/aboutMe';
import Experiences from './home/partials/experiences';
import Faq from './home/partials/faq';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import Projects from './home/partials/projects';
import Services from './home/partials/services';
import Skills from './home/partials/skills';
import TestimonialSection from './home/partials/testimonial';
import WhyChooseMe from './home/partials/whyMe';
import Footer from './home/partials/footer';
import ScrollToTopButton from '@/components/ui/scrollToTopButton';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Skills />
      <WhyChooseMe />
      <Experiences />
      <Projects />
      <TestimonialSection />
      <Faq />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
