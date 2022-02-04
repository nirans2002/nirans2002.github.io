import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from './components/navBar';
import Header from './components/header';
import Particle from './components/particles';

function App() {
  
  return (
    <div className="App">
      <Particle />
      <NavigationBar/>
      <Header/>

    </div>
  );
}

export default App;
