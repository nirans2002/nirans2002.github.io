

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navigation from './navBar';
import Home from './home';
import Footer from './footer';

function Main() {
    return(
        <Router>
            <div >
                <div >
                    <Navigation/>
                    <Routes>
                        <Route exact path='/' component={Home} />
                        {/* <Route path='/events' exact component={} /> */}
                        {/*<Route path='/projects' exact component={Projects} />*/}
                        {/* <Route path='/team' exact component={}/> */}
                        {/* <Route path='/aboutus' exact component={} />  */}
                        {/* <Route path='*' exact component={} /> */}
                    </Routes>
                </div>
                <Footer/>
            </div>
        </Router>
    )
}

export default Main;