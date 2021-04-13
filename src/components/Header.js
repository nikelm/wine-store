function Header() {
  return (
    <section className="header">
      <nav className="header__nav">
        <div className="header__nav-container">
          <p className="header__text">Новокузнечный переулок 4/1</p>
          <p className="header__ text">8 (812) 123-45-67</p>
        </div>
        <ul className="header__menu">
          <li className="header__menu-item">
            <button className="header__menu-button" type="button">Каталог</button>
          </li>
          <li className="header__menu-item">
            <button className="header__menu-button" type="button">Доставка</button>
          </li>
          <li className="header__menu-item">
            <button className="header__menu-button" type="button">Коллеции</button>
          </li>
          <li className="header__menu-item">
            <button className="header__menu-button" type="button">Доставка</button>
          </li>
        </ul>
      </nav>
      <div className="header__button-container">
        <button className="header__button-item" type="button">Винная карта</button>
        <button className="header__button-item" type="button">Дегустация</button>
      </div>
    </section>
  )
}

export default Header;