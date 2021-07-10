const Footer = () => {
  class GoogleMap {
    constructor() {
      this.key = 'AIzaSyCssHs77KIyctvIxqnDaIHjwmr5_B_Mk7E';
      this.url =
        'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJeVhppl6WkcRl1S8ZkX67cw&key=';
    }
  }

  const map = new GoogleMap();

  return (
    <footer>
      <div className='map-responsive'>
        <iframe
          title='gmap'
          width='600'
          height='450'
          style={{ border: '0' }}
          loading='lazy'
          allowFullScreen
          src={map.url + map.key}
        ></iframe>

        <div id='desni'>
          <p>
            Moto oprema "Grada"
            <br />
            Adresa: Ruzveltova 36, Zvezdara, Beograd
            <br />
            Broj telefona:+381 65555888
            <br />
            E-mail:moto-oprema@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// const api_key = 'AIzaSyCssHs77KIyctvIxqnDaIHjwmr5_B_Mk7E';
// const gmapURL = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJeVhppl6WkcRl1S8ZkX67cw&key=${api_key}`;
