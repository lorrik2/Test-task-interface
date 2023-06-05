import React, { useState } from 'react';
import search from './assets/search.svg';
import { useSearch } from '../../../hooks/useSearch';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { v4 as uuidv4 } from 'uuid';

function Address({ setSearch }: { setSearch: (val: string) => void }): JSX.Element {
  const [addresses, setAddresses] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [postStatus, setPostStatus] = useState(false);
  //  const searchInp = useSearch('', { isEmpty: true, minLengthError: 3, isString: true });
  const onHandleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (addresses.length >= 3) {
      setError(null);
      setSearch(addresses);
      setAddresses('');
      setPostStatus(true);
    } else {
      setError('Минимальная длина ввода в поле адреса - 3 символа');
    }
  };

  const { addressState } = useSelector((store: RootState) => store.addressesState);

  console.log(addressState);
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
              value={addresses}
              onChange={(e) => {
                setAddresses(e.target.value);
              }}
            />

            <button type="submit">
              <img src={search} alt="search" />
              Поиск
            </button>
          </div>
          {error !== null && <span>{error}</span>}
        </form>
        {postStatus ? (
          <div className="block__content__search__address">
            <h4>
              <strong>Адреса</strong>
            </h4>
            <ul>
              {addressState?.map((address) => (
                <li key={uuidv4()}>{address?.value}</li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Address;
