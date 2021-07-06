import { useParams } from 'react-router-dom';

const Item = ({ data }) => {
  const { itemID, title } = useParams();

  const singleItem = data.filter((kategorija) => kategorija.title === title);

  const oneSingleItem = singleItem[0].slike.find((item) => item.id === itemID);

  function showImage(event) {
    console.log(event.target.src);
    const bigImage = document.querySelector('.big-i');
    bigImage.src = event.target.src;
  }

  return (
    <div className='single-item'>
      <div onClick={(e) => showImage(e)} className='side-slider'>
        <img src='https://via.placeholder.com/125 ' alt='1' />
        <img src='https://via.placeholder.com/125 ' alt='2' />
        <img src='https://via.placeholder.com/125 ' alt='3' />
        <img src='https://via.placeholder.com/125 ' alt='4' />
        <img src='https://via.placeholder.com/125 ' alt='5' />
      </div>
      <img className='big-i' src={oneSingleItem.src + '.jpg'} alt='' />
      <div className='desc'>
        <h3>{itemID}</h3>

        <div className='short-d'>{oneSingleItem.desc}</div>

        <p className='cena'>{oneSingleItem.price} din</p>
      </div>
    </div>
  );
};

export default Item;
