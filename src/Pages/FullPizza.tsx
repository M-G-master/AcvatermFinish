import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import videoPlayImg from '../assets/img/play.png';
import ReactPlayer from 'react-player/youtube';
import { Modal } from '../components/Modal';

const FullPizza: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
    components: string;
    text: string;
    videoUrl: string;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizzas() {
      try {
        const { data } = await axios.get('https://63332597433198e79dc04b5e.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Помилка при завантаженні товару');
        navigate('/');
      }
    }

    fetchPizzas();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <h1>{pizza.title}</h1>
      <div className="headerFull">
        <img className="imgFull" src={pizza.imageUrl} />
        <div className="componentsFull">
          <h2>описание товара </h2>
          <p>{pizza.components}</p>
        </div>
        <div className="textFull">
          <h2>характеристики товара</h2>
          <p>{pizza.text}</p>
        </div>
      </div>
      <div>
        <div className="App-modal">
          <div className="Full-pizza--price"> {pizza.price} гр.</div>
          <li className="btnPlay" onClick={() => setOpen(true)}>
            <img className="playImg" src={videoPlayImg} alt="Empty cart" />
            <h4>Відео огляд товару</h4>
          </li>
          <Modal open={open} setOpen={setOpen}>
            <div className="video">
              <ReactPlayer url={pizza.videoUrl} />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default FullPizza;
