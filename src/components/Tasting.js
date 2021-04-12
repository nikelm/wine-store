import formImg1 from '../images/form-image-1.svg';
import formImg2 from '../images/form-image-2.svg';

function Tasting() {
  return (
    <section className="tasting">
      <div className="tasting__container">
        <div className="tasting__image-container">
          <img className="tasting__image1" alt="Виноград" src={formImg1} />
          <p className="tasting__title">Запись на дегустацию</p>
          <img className="tasting__image2" alt="Бочка вина" src={formImg2} />
        </div>
        <div className="tasting__decor-line"></div>
        <form className="tasting__form" name="form" noValidate autoComplete="off">
          <label className="tasting__form-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Feugiat enim tortor in hac id imperdiet adipiscing.
            Pellentesque nisi, mi sit non sit sed fermentum.
          </label>
          <fieldset className="tasting__form-inputs">
            <input className="tasting__input-name" name="name" type="text" placeholder="Имя" required />
            <span className="tasting__error"></span>
            <input className="tasting__input-phone" name="phone" type="number" placeholder="Телефон" required />
            <span className="tasting__error"></span>
          </fieldset>
          <fieldset className="tasting__form-input">
            <input className="tasting__input-address" name="address" type="text" placeholder="Бутик на Невском 103" required />
            <span className="tasting__error"></span>
          </fieldset>
          <button className="tasting__form-button" type="submit" disabled>Записаться</button>
        </form>
      </div>
    </section>
  )
}

export default Tasting;