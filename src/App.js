import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Navbar />
      <section>
        <About />
        {/* <Portfolio /> */}
        {/* <Contact /> */}
        {/* <Resume /> */}
      </section>
    </div>
  )
}

export default App;
