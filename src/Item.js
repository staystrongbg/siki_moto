import { useParams } from 'react-router-dom';

const Item = ({ items }) => {
  const { itemID, title } = useParams();

  const category = items.filter((item) => item.title === title);
  const singleItem = category[0].slike.find((item) => item.id === itemID);
  console.log(category[0].slike);
  console.log(title, '/', itemID);

  function showImage(event) {
    document.querySelector('.big-i').src = event.target.src;
  }

  return (
    <div className='single-item'>
      <div onClick={(e) => showImage(e)} className='side-slider'>
        {/* examples...otherwise should be dynamically injected in here */}
        <img
          src='http://www.wintex.rs/media/catalogProduct/kacigaNoxN312Enduro/crop2/N312_matt_black_profil1.jpg'
          alt='1'
          style={{ width: '100%' }}
        />
        <img
          src='https://motobikeshop.rs/uploads/documents/empire_plugin/rs_N312%231.jpg'
          alt='2'
          style={{ width: '100%' }}
        />
        <img
          src='http://www.garage.rs/wp-content/uploads/2018/02/3-18.jpg '
          alt='3'
          style={{ width: '100%' }}
        />
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmO6tH611zl7nNS_EwcLzVfnHc62NtDlxG8g&usqp=CAU '
          alt='4'
          style={{ width: '100%' }}
        />
        <img
          src='https://1740009751.rsc.cdn77.org/sites/balkanbaba/docs/rs/image_1393000828_5.jpg '
          alt='5'
          style={{ width: '100%' }}
        />
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
