import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Foot from './components/Foot';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Navbar />
      <section>
        <About />
        <br></br>
        <Portfolio />
        <br></br>
        <Contact />
        <br></br>
        <Resume />
      </section>
      <br></br>
      <Foot />
    </div>
  )
}

export default App;

/*
TO DO:
  - Finish Portfolio section by adding some images & associated info
  - Add styling to highlight appropriate section's TITLE after nav bar links are clicked
  - Create Contact form and add additional functionality
  - About me is first thing to load. It will be the default
*/
