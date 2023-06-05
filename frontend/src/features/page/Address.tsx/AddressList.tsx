import React, { useState } from 'react';
import search from './assets/search.svg';
import { useSearch } from '../../../hooks/useSearch';

function Address({ setSearch }: { setSearch: (val: string) => void }): JSX.Element {
  const [addresses, setAddresses] = useState('');
  const [error, setError] = useState<string | null>(null);
  const searchInp = useSearch('', { isEmpty: true, minLengthError: 3, isString: true });
  const onHandleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(searchInp.isEmpty && searchInp.isString);
    if (searchInp.isEmpty && searchInp.isString) {
      setSearch(addresses);
      setAddresses('');
    } else {
      setError('Минимальная длина ввода в поле адреса - 3 символа и только буквы');
    }
  };

  return (
    <>
      <h3>
        <strong>Поиск адресов</strong>
      </h3>
      <span>Введите интересующий вас адрес</span>
      <div className="block__content__search">
        <form onSubmit={onHandleFormSubmit}>
          <div className="block__content__search__box">
            <input
              type="address"
              placeholder="Введите интересующий вас адрес"
              value={(searchInp.value, addresses)}
              onChange={(e) => {
                setAddresses(e.target.value);
                searchInp.onChange(e);
              }}
            />

            <button type="submit">
              <img src={search} alt="search" />
              Поиск
            </button>
          </div>
          {error !== null && <span>{error}</span>}
        </form>
        <div className="block__content__search__address">
          <h4>
            <strong>Адреса</strong>
          </h4>
          <ul>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
            <li>fdfdf</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Address;
