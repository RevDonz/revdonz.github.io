import { useState, useEffect } from 'react';
import { Hero, Navbar, Skills } from "./components";

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
    </div>
  );
}

export default App;
