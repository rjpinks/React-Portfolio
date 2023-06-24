import './App.css';
import Foot from './components/Foot';
import MainComponent from './components/MainComponent'

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      {/* <Navbar /> */}
      <MainComponent />
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
