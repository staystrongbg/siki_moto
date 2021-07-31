import { useParams, useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  const { title } = useParams();
  const { url } = useRouteMatch();

  return (
    <>
      <h1>{title}</h1>

      {items.length ? (
        <div className='main'>
          {items
            .filter((cat) => cat.title === title)
            .map(({ slike }) =>
              slike.map(({ id, src, desc, price }) => (
                <div className='item' key={id}>
                  <Link to={`${url}/${id}`}>
                    <img src={src + '.jpg'} alt={id}></img>
                  </Link>
                  <div className='desc'>
                    <h3>{id}</h3>
                    <p>{desc}</p>
                    <span className='cena'>{price} din</span>
                  </div>
                </div>
              ))
            )}
        </div>
      ) : (
        <h2> no items to show</h2>
      )}
      {/* click event na svaku slikicu pa da slika dobije class active */}
    </>
  );
};

export default ItemList;
