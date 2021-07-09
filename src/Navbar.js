import { Link } from 'react-router-dom';

const Navbar = ({ logo }) => {
  return (
    <nav className='nav'>
      <img src={logo} alt={logo} />
      <ul className='links'>
        <li>
          <Link to='/about'>O nama</Link>
        </li>
        <li>
          <Link to='/'>Pocetna</Link>
        </li>
        <li>
          <Link to='/contact'>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
