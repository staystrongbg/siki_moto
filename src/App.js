import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from './data';
import Loading from './Loading';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Home from './Home';
import ItemList from './ItemList';
import Item from './Item';
import Footer from './Footer';
import logo from './images/logo_fin-01.png';

const url = 'http://localhost:8000/category';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetch();
    document.title = 'Moto oprema GRADA';
  }, []);

  return (
    <Router>
      <>
        <Navbar logo={logo} />
        <div className='container'>
          {loading && <Loading />}
          <Switch>
            <Route exact path='/'>
              <Home items={items} />
            </Route>

            <Route path='/contact'>
              <Contact />
            </Route>

            <Route path='/about'>
              <About />
            </Route>

            <Route exact path='/:title'>
              <ItemList items={items} />
            </Route>

            <Route path='/:title/:itemID'>
              <Item items={items} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
