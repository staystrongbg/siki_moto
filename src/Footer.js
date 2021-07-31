import {
  FaEnvelopeSquare,
  FaPhoneSquareAlt,
  FaStreetView,
} from 'react-icons/fa';

const Footer = () => {
  // class GoogleMap {
  //   constructor() {
  //     this.key = 'AIzaSyCssHs77KIyctvIxqnDaIHjwmr5_B_Mk7E';
  //     this.url =
  //       'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJeVhppl6WkcRl1S8ZkX67cw&key=';
  //   }
  // }

  const googleMap = {
    key: 'AIzaSyCssHs77KIyctvIxqnDaIHjwmr5_B_Mk7E',
    url: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJeVhppl6WkcRl1S8ZkX67cw&key=',
  };

  const { url, key } = googleMap;

  return (
    <footer>
      <div className='map-responsive'>
        <div id='desni'>
          <h2
            style={{ textTransform: 'lowercase', padding: 0, marginBottom: 0 }}
          >
            moto oprema
          </h2>
          <h1 style={{ marginTop: 0 }}>"GRADA"</h1>
          <p>
            <br />
            <span>
              <FaStreetView />
            </span>{' '}
            Ruzveltova 36, Zvezdara, Beograd
            <br />
            <span>
              {' '}
              <FaPhoneSquareAlt />
            </span>{' '}
            +381 65555888
            <br />
            <span>
              <FaEnvelopeSquare />
            </span>{' '}
            moto-oprema@gmail.com
          </p>
        </div>
        <iframe
          title='gmap'
          width='100%'
          height='450'
          style={{ border: '0', maxWidth: '450px' }}
          loading='lazy'
          allowFullScreen
          src={url + key}
        ></iframe>
      </div>
      <span style={{ margin: '50%', transform: 'translate(-50%)' }}>b y z</span>
    </footer>
  );
};

export default Footer;
