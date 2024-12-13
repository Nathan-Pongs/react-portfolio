import './App.css';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <section>
      <Header />
    </section>
    <section id='about'>
      <About />
    </section>
    <section id='service'>
      <Service />
    </section>
    <section id='project'>
      <Project />
    </section>
    <section id='contact'>
      <Contact />
    </section>
    <section>
      <Footer />
    </section>
    </>
  );
}

export default App;
