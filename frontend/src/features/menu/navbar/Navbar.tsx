import React, { useRef } from 'react';
import './scss/navbar.scss';
import { NavLink } from 'react-router-dom';

import burgerClose from './assets/burger-close-menu.svg';
import burgerMenu from './assets/burger-menu.svg';
import logo from './assets/ic_logo.svg';
import person from './assets/ic_person.svg';

function Navbar(): JSX.Element {
  const navRef = useRef<HTMLDivElement | null>(null);

  const showNavbar = (): void => {
    if (navRef && navRef.current) {
      navRef.current.classList.toggle('responsive__nav');
    }
  };

  return (
    <header>
      <div className="flex__container">
        <img src={logo} alt="logo" />
        <h3>Wrench CRM</h3>
      </div>

      <nav ref={navRef}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/address">Поиск адресов</NavLink>
        <NavLink to="/#">Таблицы</NavLink>
        <NavLink to="/#">Календарь</NavLink>
        <NavLink to="/#">Карты</NavLink>
        <NavLink to="/#">Виджеты</NavLink>
        <NavLink to="/#">Настройки</NavLink>
        {/*добавить*/}
        <NavLink to="/#">Выход</NavLink>
        <button className="nav__btn nav-close-btn" onClick={showNavbar}>
          <img src={burgerClose} alt="close" />
        </button>
      </nav>
      <div className="flex__container">
        <img src={person} alt="person" />
        <h4 className="nav__user-name">Имя Фамилия</h4>
      </div>
      <button className="nav__btn" onClick={showNavbar}>
        <img src={burgerMenu} alt="open" />
      </button>
    </header>
  );
}

export default Navbar;
