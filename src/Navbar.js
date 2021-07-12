import { Link } from 'react-router-dom';

const Navbar = ({ logo }) => {
  return (
    <nav className='nav'>
      <Link to='/'>
        <img src={logo} alt={logo} title='home' />
      </Link>
      <ul className='links'>
        <li>
          <Link to='/about'>O nama</Link>
        </li>
        <li>
          <Link to='/'>Početna</Link>
        </li>
        <li>
          <Link to='/contact'>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
