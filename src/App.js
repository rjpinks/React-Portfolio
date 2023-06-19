import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Navbar />
      <section>
        <About />
        <Portfolio />
        <Contact />
        <Resume />
      </section>
    </div>
  )
}

export default App;
