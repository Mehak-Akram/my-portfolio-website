import Home from './components/Home';
import About from './about/page';
import Services from './services/page'
import Skills from './components/Skills'
import Portfolio from './portfolio/page';
import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';

export default function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}