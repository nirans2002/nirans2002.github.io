import logo from './logo.svg';
import './App.css';
import {Button, Alert,Breadcrumb,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Alert variant="success">Button here</Alert>
        <Button className="">TEST</Button>
        <Card style={{color: 'black'}}>
          <Card.Header>Header</Card.Header>
          <Card.Img></Card.Img>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>example react bootstrap</Card.Text>
          </Card.Body>
        </Card>


      </header>
    </div>
  );
}

export default App;
