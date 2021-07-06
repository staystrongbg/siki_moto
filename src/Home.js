import { Link } from 'react-router-dom';

const Home = ({ data }) => {
  return (
    <div className='kat'>
      {data.map(({ id, title, img }) => (
        <li key={id}>
          <span>{title}</span>
          <Link to={`/${title}`}>
            <div className='img-container'>
              <img src={img + '.jpg'} alt={title} />
            </div>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Home;
