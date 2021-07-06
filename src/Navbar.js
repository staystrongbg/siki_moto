import { Link } from 'react-router-dom';

const Navbar = ({ logo }) => {
  return (
    <nav className='nav'>
      <img src={logo} alt={logo} />
      <ul className='links'>
        <li className='link'>
          <Link to='/about'>O nama</Link>
        </li>
        <li className='link'>
          <Link to='/'>Pocetna</Link>
        </li>
        <li className='link'>
          <Link to='/contact'>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
