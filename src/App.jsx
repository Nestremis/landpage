import './app.scss';
import { Route, Switch, useHistory } from 'react-router-dom';
import Intro from './pages/Intro';
import Navbar from './pages/Navbar';
import Method from './pages/Method';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';


function App() {

  const history = useHistory();

  const handleHistory = () => {

  }

  return (
    // <Router>  
      <div className='app'>

        <Navbar>
          <Switch>
              <Route exact path='/intro' component={Intro} />
              <Route exact path='/metoda' component={Method} />
              <Route exact path='/omnie' component={About} />
              <Route exact path='/cennik' component={Pricing} /> 
              <Route exact path='/kontakt' component={Contact}/>  
          </Switch> 
        </Navbar>

        <div className='sections'>
            <Intro/>
            <Method/>
            <About/>
            <Pricing/>
            <Contact/>      
        </div> 

      </div>
    // </Router>    
  );
}

export default App;
