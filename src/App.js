import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from './components/navBar';
import Particle from './components/particles';
import {Footer} from './components/footer';

import Main from './components/main';

function App() {
  
  return (
    <div className="App w-100">
      <Particle />
      <NavigationBar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
