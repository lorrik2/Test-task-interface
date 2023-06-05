import React, { useRef, useState } from 'react';
import './scss/navbar.scss';
import { NavLink, useNavigate } from 'react-router-dom';

import burgerClose from './assets/burger-close-menu.svg';
import burgerMenu from './assets/burger-menu.svg';
import logo from './assets/ic_logo.svg';
import person from './assets/ic_person.svg';

function Navbar(): JSX.Element {
  const [stateStatClick, setStateStatClick] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const showNavbar = (): void => {
    if (navRef && navRef.current) {
      navRef.current.classList.toggle('responsive__nav');
    }
  };

  return (
    <header>
      <div className="flex__container">
        <img src={logo} alt="logo" />
        <h3 onClick={() => navigate('/')}>Wrench CRM</h3>
      </div>

      <nav ref={navRef}>
        <NavLink to="/" onClick={showNavbar}>
          Главная
        </NavLink>
        <NavLink to="/address" onClick={showNavbar}>
          Поиск адресов
        </NavLink>
        <NavLink to="/mock" onClick={showNavbar}>
          Таблицы
        </NavLink>
        <NavLink to="/mock" onClick={showNavbar}>
          Календарь
        </NavLink>
        <NavLink to="/mock" onClick={showNavbar}>
          Карты
        </NavLink>
        <NavLink to="/mock" onClick={showNavbar}>
          Виджеты
        </NavLink>
        <NavLink
          to="/mock"
          onClick={() => {
            setStateStatClick((prev) => !prev);
          }}>
          Настройки
        </NavLink>

        {stateStatClick ? (
          <>
            <NavLink to="/mock" onClick={showNavbar}>
              Настройки профиля
            </NavLink>
            <NavLink to="/mock" onClick={showNavbar}>
              Управление финансами
            </NavLink>
          </>
        ) : (
          <></>
        )}
        <NavLink to="/mock" onClick={showNavbar}>
          Выход
        </NavLink>
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
