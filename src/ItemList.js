import { useParams, useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemList = ({ data }) => {
  const { title } = useParams();
  const { url } = useRouteMatch();

  return (
    <>
      <h1>{title}</h1>
      <div className='main'>
        {data
          .filter((cat) => cat.title == title)
          .map((item) =>
            item.slike.map((slika, index) => (
              <div className='item' key={slika.id}>
                <Link to={`${url}/${slika.id}`}>
                  <img src={slika.src + '.jpg'} alt={slika.id}></img>
                </Link>
                <div className='desc'>
                  <h3>{slika.name}</h3>
                  <div className='short-d'>{slika.desc}</div>
                  <p className='cena'>{slika.price} din</p>
                </div>
              </div>
            ))
          )}
      </div>
    </>
  );
};

export default ItemList;
