import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from './components/navBar';
import Header from './components/header';
import Particle from './components/particles';
import {BrowserRouter as Router,Switch} from 'react-router-dom'
import { Footer } from './components/footer';
function App() {
  
  return (
    <div className="App">
      {/* <Particle /> */}
      <NavigationBar/>
      <Header/>
      <Footer/>

    </div>
  );
}

export default App;
