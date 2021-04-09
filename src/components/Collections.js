import imgIntro from '../images/Rectangle-1.svg';
import imgWine1 from '../images/Rectangle-2.svg';
import imgWine2 from '../images/Rectangle-3.svg';

function Collections() {
  return (
    <section className="collections">
      <div className="collections__container">
        <div className="collections__description">
          <h1 className="collections__title">Новинки коллекции</h1>
          <h2 className="collections__subtitle">Март 1980 Урожай Марселя</h2>
          <p className="collections__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Feugiat enim tortor in hac id imperdiet adipiscing.
            Pellentesque nisi, mi sit non sit sed fermentum.
            Felis adipiscing morbi sodales ac.
          </p>
          <div className="collections__table">
            <div className="collections__table-row">
              <p className="collections__table-cell-year">1980</p>
              <div className="collections__table-cell-description">
                <p className="collections__table-title">Colli Euganei Bianco Ca' Lustra 1980</p>
                <p className="collections__table-subtitle">Красочная бутылка вина из Марселя</p>
              </div>
            </div>
            <div className="collections__table-row">
              <p className="collections__table-cell-year">1980</p>
              <div className="collections__table-cell-description">
                <p className="collections__table-title">Colli Euganei Bianco Ca' Lustra 1980</p>
                <p className="collections__table-subtitle">Красочная бутылка вина из Марселя</p>
              </div>
            </div>
            <div className="collections__table-row">
              <p className="collections__table-cell-year">1980</p>
              <div className="collections__table-cell-description">
                <p className="collections__table-title">Colli Euganei Bianco Ca' Lustra 1980</p>
                <p className="collections__table-subtitle">Красочная бутылка вина из Марселя</p>
              </div>
            </div>
          </div>
          <p className="collections__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Feugiat enim tortor in hac id imperdiet adipiscing.
            Pellentesque nisi, mi sit non sit sed fermentum.
            Felis adipiscing morbi sodales ac.
          </p>
          <button type="button" className="collections__button">УЗНАТЬ ПОДРОБНЕЕ</button>
        </div>
        <div className="collections__image">
          <img src={imgIntro} className="collections__image-intro" alt="Бокал вина" />
          <div className="collections__image-container">
            <img src={imgWine1} className="collections__image-wine-1" alt="Бутылка вина"/>
            <img src={imgWine2} className="collections__image-wine-2" alt="Бутылка вина"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collections;