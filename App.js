import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import data from './data'; ? load data from local folder instead of fetching
import Loading from './Loading';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Home from './Home';
import ItemList from './ItemList';
import Item from './Item';
import Footer from './Footer';
import logo from './images/logo_fin-01.png';

const url = './db.json';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      await fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch data from that resource');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data.category);
          setItems(data.category);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    })();

    document.title = 'Moto oprema GRADA';
    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <Router>
      <>
        <Navbar logo={logo} />
        <div className='container'>
          {loading && <Loading />}
          {error && (
            <div>
              <h2>Couldn't fetch the data</h2>
            </div>
          )}
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
