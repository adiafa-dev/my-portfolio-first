import AboutMe from './home/partials/aboutMe';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import Services from './home/partials/services';
import Skills from './home/partials/skills';
import WhyChooseMe from './home/partials/whyMe';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Skills />
      <WhyChooseMe />
    </div>
  );
}
