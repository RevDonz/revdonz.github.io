import { useState, useEffect } from 'react';
import { Footer, Hero, Navbar, Project, Skills } from "./components";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

function App() {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 250) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <div className="App">
      <Navbar scrollNav={scrollNav} />
      <Hero />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
