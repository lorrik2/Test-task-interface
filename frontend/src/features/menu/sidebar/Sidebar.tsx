import React, { useState } from 'react';
import './scss/sidebar.scss';
import { NavLink } from 'react-router-dom';
import home from './assets/ic_home.svg';
import address from './assets/address.svg';
import tables from './assets/vs_tables.svg';
import calendar from './assets/Сalendar.svg';
import map from './assets/Maps.svg';
import widget from './assets/widget.svg';
import settings from './assets/setings.svg';
import out from './assets/close.svg';
import clickClose from './assets/clickClack.svg';
import clickOpen from './assets/clickOpen.svg';
import setProfile from './assets/setProfile.svg';
import finans from './assets/VectorFinans(2).svg';

function Sidebar(): JSX.Element {
  const [stateStatClick, setStateStatClick] = useState(true);
  return (
    <nav className="sidebar">
      <h3 className="sidebar__title">МЕНЮ</h3>
      <ul className="sidebar__menu">
        <li>
          <img src={home} alt="home" />
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <img src={address} alt="searchAddresses" />
          <NavLink to="/address">Поиск адресов</NavLink>
        </li>
        <li>
          <img src={tables} alt="home" />
          <NavLink to="/mock">Таблицы</NavLink>
        </li>
        <li>
          <img src={calendar} alt="home" />
          <NavLink to="/mock">Календарь</NavLink>
        </li>
        <li>
          <img src={map} alt="home" />
          <NavLink to="/mock">Карты</NavLink>
        </li>
        <li>
          <img src={widget} alt="widget" />
          <NavLink to="/mock">Виджеты</NavLink>
        </li>
        <li>
          <img src={settings} alt="home" />
          <NavLink to="/mock" onClick={() => setStateStatClick((prev) => !prev)}>
            Настройки <img src={stateStatClick ? clickOpen : clickClose} alt="open" />
          </NavLink>
        </li>
        {!stateStatClick ? (
          <ul id="cont">
            <li className="str__plus">
              <div className="cont__dop">
                <img src={setProfile} alt="settingsProfile" />
                <NavLink to="/mock">
                  Настройки
                  <br />
                  профиля
                </NavLink>
              </div>
            </li>
            <li className="str__plus">
              <div className="cont__dop">
                <img src={finans} alt="finans" />
                <NavLink to="/mock">
                  Управление
                  <br />
                  финансами
                </NavLink>
              </div>
            </li>
          </ul>
        ) : (
          <></>
        )}
        <li>
          <img src={out} alt="outProfile" />
          <NavLink to="/mock">Выход</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
