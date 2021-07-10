import { useParams } from 'react-router-dom';

const Item = ({ items }) => {
  const { itemID, title } = useParams();

  const category = items.filter((item) => item.title === title);
  const singleItem = category[0].slike.find((item) => item.id === itemID);

  function showImage(event) {
    document.querySelector('.big-i').src = event.target.src;
  }

  return (
    <div className='single-item'>
      <div onClick={(e) => showImage(e)} className='side-slider'>
        {/* examples...otherwise should be dynamically injected in here*/}
        <img src='https://via.placeholder.com/125 ' alt='1' />
        <img src='https://via.placeholder.com/125 ' alt='2' />
        <img src='https://via.placeholder.com/125 ' alt='3' />
        <img src='https://via.placeholder.com/125 ' alt='4' />
        <img src='https://via.placeholder.com/125 ' alt='5' />
      </div>
      <img className='big-i' src={singleItem.src + '.jpg'} alt='' />
      <div className='desc'>
        <h3>{itemID}</h3>
        <p>{singleItem.desc}</p>
        <span className='cena'>{singleItem.price} din</span>
      </div>
    </div>
  );
};

export default Item;
