import AboutMe from './home/partials/aboutMe';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import Services from './home/partials/services';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
    </div>
  );
}
