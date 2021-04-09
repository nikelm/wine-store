import youTube from '../images/carbon_logo-youtube.svg';
import vk from '../images/entypo-social_vk.svg';
import faceBook from '../images/bx_bxl-facebook.svg';

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <button className="footer__menu-button">
              Главная
            </button>
          </li>
          <li className="footer__menu-item">
            <button className="footer__menu-button">
              Каталог
            </button>
          </li>
          <li className="footer__menu-item">
            <button className="footer__menu-button">
              Поставщики
            </button>
          </li>
          <li className="footer__menu-item">
            <button className="footer__menu-button">
              Коллекции
            </button>
          </li>
          <li className="footer__menu-item">
            <button className="footer__menu-button">
              Дегустация
            </button>
          </li>
          <li className="footer__menu-item">
            <button className="footer__menu-button">
              Коллекция 2020
            </button>
          </li>
          <li className="footer__menu-item">
            <button className="footer__menu-button">
              Контакты
            </button>
          </li>
        </ul>
        <ul className="footer__menu footer__menu_bottom">
          <li className="footer__menu-item footer__menu-item_border">
            <a href="/" className="footer__links-item">
              винный бутик LE CORTE
            </a>
          </li>
          <li className="footer__menu-item footer__menu-item_border">
            <p className="footer__menu-button">
              8 (812) 123-45-67
            </p>
          </li>
          <li className="footer__menu-item footer__menu-item_border">
            <div className="footer__links">
              <a href="https://youtube.com" className="footer__links-item">
                <img src={youTube} alt="YouTube" className="footer__img" />
              </a>
              <a href="https://vk.com" className="footer__links-item">
                <img src={vk} alt="VK" className="footer__img" />
              </a>
              <a href="https://facebook.com" className="footer__links-item">
                <img src={faceBook} alt="FaceBook" className="footer__img" />
              </a>
            </div>
          </li>
          <li className="footer__menu-item">
            <p className="footer__menu-button">
              © le-corte.ru
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer;