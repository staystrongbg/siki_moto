import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Home from './Home';
import ItemList from './ItemList';
import Item from './Item';
import Error from './Error';
import Footer from './Footer';
import logo from './images/logo_fin-01.png';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = '/db.json';

  document.title = 'Moto oprema GRADA';

  const getData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setItems(data.category);
    setLoading(false);
    setError(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <>
        <Navbar logo={logo} />
        <div className='container'>
          {loading && <Loading />}
          {error && <Error />}
          {!loading && (
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
          )}
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
