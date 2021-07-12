const Contact = () => {
  const styles = {
    backgroundColor: '#fff',
    color: '#222',
    padding: '1rem',
    animation: 'fadeIn ease 0.3s',
  };

  return (
    <>
      <h1>Kontakt</h1>
      <div style={styles}>
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
    </>
  );
};

export default Contact;
