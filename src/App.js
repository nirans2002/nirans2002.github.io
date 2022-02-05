import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from './components/navBar';
import Header from './components/header';
import Particle from './components/particles';
import {Footer} from './components/footer';
import Contact from './components/contact';
import Projects from './components/projects';
import Main from './components/main';

function App() {
  
  return (
    <div className="App">
      {/* <Particle /> */}
      <NavigationBar/>
      <Main/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
