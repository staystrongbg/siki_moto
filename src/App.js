import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import data from './data';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Home from './Home';
import ItemList from './ItemList';
import Item from './Item';
import Footer from './Footer';
import logo from './images/logo_fin-01.png';

function App() {
  return (
    <Router>
      <>
        <Navbar logo={logo} />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Home data={data} />
            </Route>

            <Route path='/contact'>
              <Contact />
            </Route>

            <Route path='/about'>
              <About />
            </Route>

            <Route exact path='/:title'>
              <ItemList data={data} />
            </Route>

            <Route path='/:title/:itemID'>
              <Item data={data} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
