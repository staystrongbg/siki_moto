const Footer = () => {
  const gmap =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4020.8051373876838!2d20.475993457745698!3d44.80603007529089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9f30e9b991%3A0x515cfc83514922cd!2z0KDRg9C30LLQtdC70YLQvtCy0LAgMzYsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1483350761047 width="40%" height="100%" frameborder="0" allowfullscreen>';

  return (
    <footer>
      <div className='map-responsive'>
        <iframe src={gmap} title='google map'></iframe>
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
      <div className='by'>b y z</div>
    </footer>
  );
};

export default Footer;
